/**
 * True while the page is being rendered by the build-time prerenderer
 * (scripts/prerender.js drives a headless browser with this UA).
 *
 * Anything that never settles — an infinite animation, a timed splash — has to
 * be skipped in that pass: the prerenderer waits for the page to go quiet, and
 * a loop that never ends means it either captures a loading state or hangs.
 */
export const IS_PRERENDER =
  typeof navigator !== "undefined" &&
  /PixlversePrerender/i.test(navigator.userAgent);
