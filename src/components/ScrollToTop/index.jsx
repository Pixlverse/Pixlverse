import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on every route change (SPA navigation doesn't do this by default).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}
