import React from "react";
import "./Partners.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="logo-row">
        <div className="partner-logo">
          <img src={logo1} alt="logo1" />
        </div>
        <div className="partner-logo">
          <img src={logo2} alt="logo2" />
        </div>
        <div className="partner-logo">
          <img src={logo3} alt="logo3" />
        </div>
        <div className="partner-logo">
          <img src={logo4} alt="logo4" />
        </div>
        <div className="partner-logo">
          <img src={logo5} alt="logo5" />
        </div>
        <div className="partner-logo">
          <img src={logo6} alt="logo6" />
        </div>
        <div className="partner-logo">
          <img src={logo7} alt="logo7" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
