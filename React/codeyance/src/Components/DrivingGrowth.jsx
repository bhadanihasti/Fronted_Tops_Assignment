import React from 'react';
import './DrivingGrowth.css';

const DrivingGrowth = () => {
  return (
    <section className="driving-growth-section">
      <div className="driving-growth-container">
        
        {/* Stats Section */}
        <div className="stats-container">
          <div className="stats-text-content">
            <span className="section-subtitle">DRIVING GROWTH</span>
            <h2 className="section-title">
              Real Success Stories<br />
              Proven Results
            </h2>
            <p className="section-description">
              Trusted by businesses worldwide, we've successfully delivered
              innovative digital solutions across multiple industries.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">40+</h3>
              <p className="stat-label">Projects Deployed</p>
            </div>
            <div className="stat-card relative-card">
              <h3 className="stat-number">25+</h3>
              <p className="stat-label">Trusted Clients</p>
              <div className="infinity-icon-wrapper">
                <i className="fa-solid fa-infinity"></i>
              </div>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">12+</h3>
              <p className="stat-label">Industries Served</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">03+</h3>
              <p className="stat-label">Years of Service</p>
            </div>
          </div>
        </div>

        {/* CTA Banner Section */}
        <div className="cta-banner">
          {/* Decorative background circles */}
          <div className="cta-circle circle-left"></div>
          <div className="cta-circle circle-right"></div>
          
          <div className="cta-content">
            <span className="cta-subtitle">START YOUR DIGITAL JOURNEY</span>
            <h2 className="cta-title">Turn Your Vision Into Powerful Digital Solutions</h2>
            <p className="cta-description">
              From strategy to development, we create custom software solutions designed to accelerate your business and deliver meaningful user experiences.
            </p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DrivingGrowth;
