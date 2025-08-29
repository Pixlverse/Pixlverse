import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["About", "Projects", "Services", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => (window.location.href = "/")}
        >
          <img src="/images/mainlogo.png" alt="Pixlverse" />
        </div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "icon open" : "icon"}></div>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item) => {
            const path = item.toLowerCase() === "about" ? "/" : `/${item.toLowerCase()}`;
            const isActive = window.location.pathname === path || (item.toLowerCase() === "about" && window.location.pathname === "/");
            return (
              <li key={item} className="nav-item">
                <a
                  href={path}
                  className={`nav-link${isActive ? " active" : ""}`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
