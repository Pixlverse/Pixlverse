/* eslint-disable no-console */
/**
 * Build-time prerenderer.
 *
 * CRA ships a single empty index.html for every route, so the HTML a crawler
 * actually reads carries the homepage's <title>, description and — worst of
 * all — the homepage's rel=canonical. That last one tells Google every page is
 * a duplicate of the homepage, which keeps four of the five out of the index.
 *
 * This serves the finished build, loads each route in a real browser, waits
 * for React to settle, and writes the resulting DOM to its own index.html. The
 * client then hydrates that markup instead of discarding it (see src/index.js).
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteerCore = require("puppeteer-core");

/**
 * Launching a browser is the one part of this that differs by environment.
 *
 * Vercel's build image is Amazon Linux without Chrome's shared libraries, so
 * Puppeteer's own bundled browser dies with "libnspr4.so: cannot open shared
 * object file". @sparticuz/chromium exists for exactly that: a Chromium built
 * for serverless images with those libraries packaged alongside it. It only
 * ships Linux binaries, so locally we fall back to the normal Puppeteer
 * download.
 */
async function launchBrowser() {
  const COMMON = ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"];

  // an explicit path always wins, for CI images that provide their own Chrome
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    console.log("prerender: browser = PUPPETEER_EXECUTABLE_PATH");
    return puppeteerCore.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: COMMON,
      headless: true,
    });
  }

  if (process.platform === "linux") {
    /* The package is ESM with a default export, so a plain require() hands
       back the interop wrapper ({__esModule, default, ...}) rather than the
       API — .args would be undefined and spreading it would throw. */
    const mod = require("@sparticuz/chromium");
    const chromium = mod.default || mod;

    if (typeof chromium.executablePath !== "function" || !Array.isArray(chromium.args)) {
      throw new Error(
        "@sparticuz/chromium did not expose the expected API — " +
          `got keys: ${Object.keys(chromium).join(", ")}`
      );
    }

    const executablePath = await chromium.executablePath();
    console.log(`prerender: browser = @sparticuz/chromium (${executablePath})`);
    return puppeteerCore.launch({
      executablePath,
      args: [...chromium.args, ...COMMON],
      defaultViewport: { width: 1280, height: 900 },
      headless: true,
    });
  }

  console.log("prerender: browser = puppeteer (local download)");
  // eslint-disable-next-line global-require
  return require("puppeteer").launch({ headless: true, args: COMMON });
}

const BUILD = path.join(__dirname, "..", "build");
/* Single source of truth for what exists: the prerenderer walks these and the
   sitemap is generated from the same list, so the two can never disagree. */
const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/projects", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" },
];
const SITE_URL = "https://www.pixlverse.in";
const PORT = 45678;

/* Marks the pass so the app can skip anything that never settles — see
   src/utils/prerender.js */
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 PixlversePrerender";

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".webp": "image/webp", ".woff": "font/woff", ".woff2": "font/woff2",
  ".txt": "text/plain", ".xml": "application/xml", ".webmanifest": "application/manifest+json",
};

/**
 * `template` is the pristine CRA shell, read once before anything is written.
 *
 * It has to be held in memory: rendering "/" overwrites build/index.html with
 * the prerendered homepage, and if later routes were then bootstrapped from
 * disk they would start life carrying the homepage's title and canonical, with
 * React appending a second set on top. Two canonicals, and the crawler obeys
 * the first one.
 */
function serve(template) {
  return http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    const file = path.join(BUILD, url);
    // SPA fallback: anything without an extension is a route, not a file
    if (!path.extname(file)) {
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(template);
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("not found");
      }
      res.writeHead(200, {
        "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
      });
      res.end(data);
    });
  });
}

(async () => {
  if (!fs.existsSync(path.join(BUILD, "index.html"))) {
    console.error("prerender: no build/ found — run the build first");
    process.exit(1);
  }

  const template = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
  const server = serve(template);
  await new Promise((r) => server.listen(PORT, r));

  const browser = await launchBrowser();

  let failed = 0;

  for (const { path: route } of ROUTES) {
    const page = await browser.newPage();
    await page.setUserAgent(UA);
    await page.setViewport({ width: 1280, height: 900 });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 45000,
      });
      // React has to have painted something before the DOM is worth keeping
      await page.waitForSelector("#root > *", { timeout: 15000 });

      let html = await page.content();
      // the crawler should not run the prerenderer's own marker
      html = html.replace(/PixlversePrerender/g, "");

      const dir =
        route === "/" ? BUILD : path.join(BUILD, route.replace(/^\//, ""));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);

      const count = (re) => (html.match(re) || []).length;
      const dupes = [
        ["<title>", count(/<title[^>]*>/g)],
        ["canonical", count(/rel="canonical"/g)],
        ["og:url", count(/property="og:url"/g)],
      ].filter(([, n]) => n !== 1);
      if (dupes.length) {
        throw new Error(
          "duplicate head tags: " +
            dupes.map(([k, n]) => `${k} x${n}`).join(", ")
        );
      }

      const title = (html.match(/<title[^>]*>(.*?)<\/title>/s) || [])[1] || "";
      const canon =
        (html.match(/rel="canonical"\s+href="([^"]+)"/) || [])[1] || "";
      console.log(
        `prerender: ${route.padEnd(10)} ${String(html.length).padStart(7)} bytes` +
          `\n             title     ${title.slice(0, 62)}` +
          `\n             canonical ${canon}`
      );
    } catch (err) {
      failed++;
      console.error(`prerender: ${route} FAILED — ${err.message.split("\n")[0]}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  /* Written here rather than kept as a static file so lastmod is the actual
     deploy date every time, instead of a date someone forgot to update. */
  const today = new Date().toISOString().slice(0, 10);
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ROUTES.map(
      ({ path: r, priority, changefreq }) =>
        "  <url>\n" +
        `    <loc>${SITE_URL}${r === "/" ? "/" : r}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${changefreq}</changefreq>\n` +
        `    <priority>${priority}</priority>\n` +
        "  </url>"
    ).join("\n") +
    "\n</urlset>\n";
  fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);
  console.log(`prerender: sitemap.xml written (lastmod ${today})`);

  if (failed) {
    console.error(`prerender: ${failed} route(s) failed`);
    process.exit(1);
  }
  console.log(`prerender: wrote ${ROUTES.length} routes`);
})();
