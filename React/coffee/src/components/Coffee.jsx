import React from "react";
import img1 from "./images/img-1.png";
import img2 from "./images/img-2.png";
import img3 from "./images/img-3.png";
import img4 from "./images/img-4.png";
import "./coffestyle.css";
import { useNavigate } from "react-router-dom";

function Coffee() {
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

      <div class="service" style={{ marginTop: "200px" }}>
        <div class="service-head">
          <h1>OUR Coffee OFFER</h1>
        </div>
        <div class="service-info">
          <div class="box">
            <img src={img1} alt="" />
            <div class="box-info">
              <h2>TYPES OF COFFEE</h2>
              <p>looking at its layout. The point of</p>
              <button>Read More</button>
            </div>
          </div>

          <div class="box">
            <img src={img2} alt="" />
            <div class="box-info">
              <h2>TYPES OF COFFEE</h2>
              <p>looking at its layout. The point of</p>
              <button>Read More</button>
            </div>
          </div>

          <div class="box">
            <img src={img3} alt="" />
            <div class="box-info">
              <h2>TYPES OF COFFEE</h2>
              <p>looking at its layout. The point of</p>
              <button>Read More</button>
            </div>
          </div>

          <div class="box">
            <img src={img4} alt="" />
            <div class="box-info">
              <h2>TYPES OF COFFEE</h2>
              <p>looking at its layout. The point of</p>
              <button>Read More</button>
            </div>
          </div>
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

export default Coffee;
