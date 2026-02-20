import React from "react";
import "./coffestyle.css";
import banner from "./images/banner-bg.png";
import about from "./images/about-img.png";
import img1 from "./images/img-1.png";
import img2 from "./images/img-2.png";
import img3 from "./images/img-3.png";
import img4 from "./images/img-4.png";
import client from "./images/client-img1.png";
import blog1 from "./images/blog-img1.png";
import blog2 from "./images/blog-img2.png";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="hero">
        <img src={banner} alt="Banner" />
        <div class="nav">
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

          <div class="hero-text">
            <h1>
              Coffee <br />
              Shop
            </h1>
            <p>
              more-or-less normal distribution of letters, as opposed to using
            </p>
            <div class="b1">
              <button class="btn-about">About Us</button>
              <button class="btn-call">Call Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
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
      <div class="service">
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
      <div class="feedback">
        <div class="feed-head">
          <h1>What syas customers</h1>
        </div>

        <div class="feed-content">
          <div class="feed-img">
            <img src={client} alt="" />
          </div>

          <div class="feed-text">
            <h3>Joy Moarknow</h3>
            <p>
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their
              infancynow use Lorem Ipsum as their default model text,
            </p>
          </div>
        </div>
      </div>
      <div class="blog">
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
      <div class="contact">
        <h1 class="service-head">Get In Touch</h1>
        <div class="input-text">
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="email" name="" id="" placeholder="Your Email" />
          <input
            type="text"
            maxlength="10"
            minlength="10"
            name=""
            id=""
            placeholder="Your Phone"
          />
          <textarea name="" id="" placeholder="Your Message"></textarea>

          <button class="btn-send">Send</button>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2713213361053!2d72.8227031750853!3d21.181378080506438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6a2dc2a1ff%3A0x2484cfbc648e158f!2sJeevandip%20Complex!5e0!3m2!1sen!2sin!4v1770285607615!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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

export default Index;
