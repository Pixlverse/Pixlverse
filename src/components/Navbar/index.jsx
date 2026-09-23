import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import "./navbar.css";
import { NAV_LINKS } from "../../data/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // and on Escape, since the panel traps attention over the page
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const normalize = (p) => (p === "/" ? "/" : p.replace(/\/$/, ""));
  const current = normalize(pathname || "/");

  return (
    /* The bar is a floating pill rather than a full-width band welded to the
       top of the page: it never touches the hero, and it keeps the same dark
       glass on every route, so nothing has to invert per page. */
    <header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}${
        isOpen ? " navbar--open" : ""
      }`}
    >
      <nav className="navbar-inner" aria-label="Primary">
        <Link to="/" className="navbar-logo" aria-label="Pixlverse home">
          <img
            src="/images/pixlverse-wordmark-white.png"
            alt="Pixlverse — website design & development"
            width="475"
            height="120"
          />
        </Link>

        <ul className={`nav-menu${isOpen ? " active" : ""}`}>
          {NAV_LINKS.map((item, i) => {
            const isActive = current === normalize(item.path);
            return (
              <li key={item.path} className="nav-item" style={{ "--i": i }}>
                <Link
                  to={item.path}
                  className={`nav-link${isActive ? " active" : ""}`}
                >
                  {item.label}
                  {/* one pill shared by every link: layoutId makes Framer glide
                      it from the old active link to the new one on navigation */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="nav-active-pill"
                      aria-hidden="true"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                </Link>
              </li>
            );
          })}

          {/* the panel's own CTA — the pill's copy is hidden at this width */}
          <li className="nav-item nav-cta-item" style={{ "--i": NAV_LINKS.length }}>
            <Link to="/contact" className="btn btn--primary nav-cta">
              Get a Free Quote
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <motion.div
            className="nav-cta-desk"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            <Link to="/contact" className="btn nav-cta">
              Get a Free Quote
            </Link>
          </motion.div>

          <button
            className={`menu-toggle${isOpen ? " open" : ""}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
