// Lightweight scroll reveal using IntersectionObserver
export default function initScrollReveal({ selector = '.reveal', rootMargin = '0px 0px -10% 0px', threshold = 0.05 } = {}) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const observed = new WeakSet();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const node = entry.target;
        // add class to reveal container
        node.classList.add('show');

        // apply a small stagger to direct children for smoothness
        try {
          const children = Array.from(node.children || []);
          const base = 80; // ms
          children.forEach((c, i) => {
            const delay = `${Math.min(600, base * i)}ms`;
            c.style.transitionDelay = delay;
          });
        } catch (e) {}

        // stop observing this element once revealed
        try { io.unobserve(node); } catch (e) {}
      }
    });
  }, { root: null, rootMargin, threshold });

  const observeEl = (el) => {
    if (!el || observed.has(el)) return;
    observed.add(el);
    io.observe(el);
  };

  // initial scan
  const scan = () => {
    const els = Array.from(document.querySelectorAll(selector));
    els.forEach(observeEl);
  };

  scan();

  // watch for DOM changes (helpful for SPA route changes / late mounts)
  const mo = new MutationObserver((mutations) => {
    // lightweight re-scan on mutations
    scan();
  });

  try {
    mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
  } catch (e) {
    // ignore (e.g., document.body may not be ready)
  }

  // safety re-scan after a short delay for frameworks that mount asynchronously
  const timeoutId = setTimeout(scan, 500);

  // return cleanup function
  return () => {
    try { io.disconnect(); } catch (e) {}
    try { mo.disconnect(); } catch (e) {}
    try { clearTimeout(timeoutId); } catch (e) {}
  };
}
