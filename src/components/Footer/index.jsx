import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { SITE, NAV_LINKS, SERVICES, SERVING } from "../../data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <img
            src="/images/pixlverse-wordmark-white.png"
            alt="Pixlverse — website design & development"
            className="footer-logo"
            width="475"
            height="120"
          />
          <p className="footer-desc">
            Pixlverse is a website design and development studio in{" "}
            {SITE.region}, India. We build fast, SEO-ready websites for
            businesses across {SITE.countries}, and we stay on after launch to
            keep them secure, updated and growing.
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
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Serving</h4>
          <ul className="footer-areas">
            {SERVING.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <div className="footer-socials">
            <a href={`mailto:${SITE.email}`} aria-label="Email Pixlverse">
              <FaEnvelope />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pixlverse on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p className="footer-keywords">
          Website Design · Web Development · SEO Optimization · Maintenance &amp;
          Support · Website Revamps · Domain &amp; Hosting
        </p>
      </div>
    </footer>
  );
};

export default Footer;
