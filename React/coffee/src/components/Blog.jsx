import React from "react";
import blog1 from "./images/blog-img1.png";
import blog2 from "./images/blog-img2.png";
import "./coffestyle.css";
import { useNavigate } from "react-router-dom";

function Blog() {
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
      <div class="blog" style={{ marginTop: "200px" }}>
        <div class="blog-head">
          <h1>Our Blog</h1>
        </div>
        <div class="blog-info">
          <div class="blog-content">
            <img src={blog1} alt="Blog 1" />

            <h3>PREP TECHNIQUES COFFEE</h3>
            <p>
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              moredistracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more
            </p>
          </div>

          <div class="blog-content">
            <img src={blog2} alt="Blog 2" />

            <h3>ENJOY BEST COFFEE</h3>
            <p>
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              moredistracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a more
            </p>
          </div>
        </div>
        <button id="btn1">Read More</button>
        <button id="btn2">Read More</button>
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

export default Blog;
