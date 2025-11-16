import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/images/mainlogo.png"
            alt="Pixlverse"
            className="footer-logo"
          />
          <p className="footer-desc">
            Infinite Possibilities, Pixel Perfect. Crafting elegant,
            high-performing websites with unmatched support.
          </p>
          {/* <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div> */}
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="about">{`> About Us`}</a>
            </li>
            <li>
              <a href="services">{`> Services`}</a>
            </li>
            <li>
              <a href="projects">{`> Projects`}</a>
            </li>
            <li>
              <a href="contact">{`> Contact`}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pixlverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
