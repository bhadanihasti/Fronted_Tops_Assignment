import React from "react";
import about from "./images/about-img.png";
import "./coffestyle.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <div class="nav" style={{ background: "rgba(0, 0, 0, 0.8) " }}>
        <h1>COFFO</h1>
        <ul>
          <li id="h" onClick={() => navigate("/")}>
            HOME
          </li>
          <li onClick={() => navigate("/about")}>ABOUT</li>
          <li onClick={() => navigate("/coffee")}>COFFES</li>
          <li>SHOP</li>
          <li onClick={() => navigate("/blog")}>BLOG</li>
          <li onClick={() => navigate("/contact")}>CONTACT</li>
        </ul>
        <div id="hover1">
          <ul>
            <li>LOGIN</li>
            <li>SEARCH</li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <div class="content" style={{ marginTop: "200px" }}>
        <div class="right">
          <h1 class="proh1">About Our shop</h1>
          <p class="p1">Coffee distribution '</p>
          <p class="p2">
            has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editorhas a
            more-or-less normal distribution of letters, as oppos
          </p>
          <button>Read More</button>
        </div>
        <div class="left">
          <img src={about} alt="demo gif" width="300" />
        </div>
      </div>
      {/* ONLY footer */}
      <div className="footer">
        <div className="icon">
          <div className="icon-group">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon-group">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="icon-group">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="icon-group">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="icon2">
          <div className="phone">
            <i className="fa-solid fa-phone"></i>
            <h5>+01 1234567890</h5>
          </div>

          <div className="phone">
            <i className="fa-solid fa-envelope"></i>
            <h5>demo@gmail.com</h5>
          </div>
        </div>

        <div className="input-email">
          <input type="text" placeholder="Your Email" />
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div className="footer2">
        <p>
          2020 All Rights Reserved. Design by Free Html Templates Distribution
          by ThemeWagon
        </p>
      </div>
    </div>
  );
}

export default About;
