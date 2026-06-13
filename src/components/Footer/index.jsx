import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaEnvelope, FaArrowRight, FaInstagram } from "react-icons/fa";
import { SITE, NAV_LINKS, SERVICES } from "../../data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-cta container">
        <div>
          <h2>Let's build something pixel-perfect.</h2>
          <p>Tell us about your project — we'll reply within 24 hours.</p>
        </div>
        <Link to="/contact" className="btn btn--light">
          Start a project <FaArrowRight />
        </Link>
      </div>

      <div className="footer-main container">
        <div className="footer-brand">
          <img src="/images/mainlogo-footer.png" alt="Pixlverse logo" className="footer-logo" />
          <p className="footer-desc">
            A website design &amp; development studio in {SITE.region}, India. We craft
            elegant, high-performing, SEO-ready websites for businesses across India and beyond —
            backed by clean code and continuous support.
          </p>
          <a className="footer-email" href={`mailto:${SITE.email}`}>
            <FaEnvelope /> {SITE.email}
          </a>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.filter((l) => l.path !== "/").map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link to="/services">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Serving</h4>
          <ul className="footer-areas">
            <li>Kerala, India</li>
            <li>Across India</li>
            <li>International clients</li>
          </ul>
          <div className="footer-socials">
            <a href={`mailto:${SITE.email}`} aria-label="Email Pixlverse"><FaEnvelope /></a>
            <span className="social-disabled" aria-label="Instagram (coming soon)" title="Coming soon"><FaInstagram /></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {year} {SITE.name}. All rights reserved.</p>
        <p className="footer-keywords">
          Website Design · Web Development · SEO Optimization · Kerala · India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
