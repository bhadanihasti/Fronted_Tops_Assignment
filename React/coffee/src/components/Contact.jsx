import React, { useState } from "react";
import "./coffestyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {
  const navigate = useNavigate();
  const [contacts, setContact] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    des: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contacts,
      [name]: value,
    });
  };
  const handleClick = async (e) => {
    try {
      let res = await axios.post("http://localhost:3000/contacts", contacts);
      if (res) {
        alert("contact submites");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

      <div class="contact" style={{ marginTop: "200px" }}>
        <h1 class="service-head">Get In Touch</h1>
        <div class="input-text">
          <input
            type="text"
            name="uname"
            id=""
            placeholder="Your Name"
            value={contacts.uname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="uemail"
            id=""
            placeholder="Your Email"
            onChange={handleChange}
          />
          <input
            type="text"
            maxlength="10"
            minlength="10"
            name="uphone"
            id=""
            placeholder="Your Phone"
            onChange={handleChange}
          />
          <textarea
            name="des"
            id=""
            placeholder="Your Message"
            onChange={handleChange}
          ></textarea>

          <button class="btn-send" onClick={handleClick}>
            Send
          </button>
        </div>
      </div>

      {/*ONLY footer */}
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
export default Contact;
