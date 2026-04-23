import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-section">
      {/* Decorative SVGs */}
      <div className="deco curly">
        <div className="css-wavy">
          <div className="w-up"></div><div className="w-dn"></div>
          <div className="w-up"></div><div className="w-dn"></div>
          <div className="w-up"></div><div className="w-dn"></div>
        </div>
      </div>
      <div className="deco crown">
        <div className="css-crown">
          <div className="css-crown-diamond"></div>
          <div className="css-crown-diamond"></div>
          <div className="css-crown-base"></div>
          <div className="css-crown-dot c-dot1"></div>
          <div className="css-crown-dot c-dot2"></div>
          <div className="css-crown-dot c-dot3"></div>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hl-wrapper">
            <span className="hl-text">AI-Empowered</span>
            <span className="css-hl-ellipse"></span>
          </span>{' '}
          Software<br/> Development Company
        </h1>
        
        <p className="hero-subtitle">
          We combine artificial intelligence with cutting-edge engineering to build<br/>
          smarter digital products. Transforming bold ideas into intelligent, scalable,<br/>
          and future-ready solutions.
        </p>

        <button className="get-started-btn">Get Started</button>

        <div className="scroll-indicator">
          <div className="css-scroll-text">
            {"FOR WORK TOGETHER - SCROLL DOWN - ".split("").map((char, i) => (
              <span key={i} style={{ transform: `rotate(${i * 10}deg)` }}>{char}</span>
            ))}
          </div>
          <div className="mouse-icon">
            <span className="css-mouse">
              <i className="m-wheel"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Widgets */}
      <div className="floating-left">
        <div className="stats-box">
          <div className="stat-item border-bottom">
            <div className="stat-header">
              <h2>25+</h2>
              <button className="arrow-btn">
                <span className="css-arrow-up-right"></span>
              </button>
            </div>
            <p>Trusted Companies</p>
          </div>
          <div className="stat-item">
            <h2 className="text-green">95%</h2>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <div className="floating-right">
        <div className="feature-item">
          <span>Future-Ready<br/>Strategies</span>
          <div className="icon-wrapper">
             <div className="css-target">
               <i className="t-out"></i><i className="t-in"></i>
               <i className="t-l1"></i><i className="t-l2"></i>
               <i className="t-l3"></i><i className="t-l4"></i>
             </div>
          </div>
          <div className="line-connector"></div>
        </div>
        <div className="feature-item">
          <span>24/7 Customer<br/>Support</span>
          <div className="icon-wrapper">
             <div className="css-headphone">
               <i className="h-band"></i><i className="h-pad-l"></i><i className="h-pad-r"></i>
             </div>
          </div>
          <div className="line-connector bot-connector"></div>
        </div>
      </div>

    </main>
  );
};

export default Hero;
