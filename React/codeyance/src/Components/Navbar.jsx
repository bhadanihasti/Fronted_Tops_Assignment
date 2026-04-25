import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Codeyance" className="logo-image" />
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li className="dropdown">
            <div className="dropdown-trigger">
              <a href="#">Services</a>
              <span className="css-icon-chevron"></span>
            </div>

            <div className="dropdown-menu">
              <h4>Services</h4>
              <div className="dropdown-grid">
                {/* Column 1 */}
                <div className="dropdown-col">
                  <a href="#" className="dropdown-item">
                    <div className="dropdown-icon">
                      <span className="css-icon-base icon-product">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </span>
                    </div>
                    <span>Product Design</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="dropdown-icon">
                      <span className="css-icon-base icon-web">
                        <i className="w-box"></i>
                        <i className="w-line"></i>
                        <i className="w-dot"></i>
                      </span>
                    </div>
                    <span>Web Development</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="dropdown-icon">
                      <span className="css-icon-base icon-saas">
                        <i className="s-box"></i>
                        <i className="s-line"></i>
                        <i className="s-rect"></i>
                      </span>
                    </div>
                    <span>SaaS Development</span>
                  </a>
                </div>

                {/* Column 2 */}
                <div className="dropdown-col">
                  <a href="#" className="dropdown-item">
                    <div className="dropdown-icon">
                      <span className="css-icon-base icon-mobile">
                        <i className="m-phone"></i>
                        <i className="m-line"></i>
                        <i className="m-dot"></i>
                      </span>
                    </div>
                    <span>Mobile App Development</span>
                  </a>
                  <a href="#" className="dropdown-item">
                    <div className="dropdown-icon">
                      <span className="css-icon-base icon-backend">
                        <i className="b-left"></i>
                        <i className="b-right"></i>
                        <i className="b-slash"></i>
                      </span>
                    </div>
                    <span>Backend Development</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="contact-btn">Contact Us</button>
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`css-icon-base icon-menu ${isMobileMenuOpen ? "open" : ""}`}
            >
              <i className="m-bar"></i>
              <i className="m-bar"></i>
              <i className="m-bar"></i>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
