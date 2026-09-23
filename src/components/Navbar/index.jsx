import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { NAV_LINKS } from "../../data/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

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

  const normalize = (p) => (p === "/" ? "/" : p.replace(/\/$/, ""));
  const current = normalize(pathname || "/");

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <nav className="navbar-inner container" aria-label="Primary">
        <Link to="/" className="navbar-logo" aria-label="Pixlverse home">
          <img src="/images/mainlogo.png" alt="Pixlverse — website design & development" />
        </Link>

        <button
          className={`menu-toggle${isOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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
                </Link>
              </li>
            );
          })}
          <li className="nav-item nav-cta-item" style={{ "--i": NAV_LINKS.length }}>
            <Link to="/contact" className="btn btn--primary nav-cta">
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
