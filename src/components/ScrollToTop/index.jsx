import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on every route change (SPA navigation doesn't do this by
// default). When the URL carries a hash — e.g. /services#seo-optimization from
// the footer — scroll to that section instead.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section is laid out before we measure it.
      const id = window.requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, left: 0 });
      });
      return () => window.cancelAnimationFrame(id);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  }, [pathname, hash]);

  return null;
}
