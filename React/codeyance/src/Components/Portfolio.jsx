import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-title-wrapper">
            <span className="portfolio-subtitle">OUR PORTFOLIO</span>
            <h2 className="portfolio-title">
              <span className="text-green">Real Projects</span> That Prove<br />
              Our Strategy Drives Growth
            </h2>
          </div>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="portfolio-grid">
          {/* Card 1 */}
          <div className="portfolio-card card-large">
            <div className="card-content">
              <h3>Doctoryab</h3>
              <p>UI/UX • iOS • Android</p>
            </div>
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="portfolio-card card-image">
            <div className="placeholder-phones">
               {/* Phone silhouettes */}
               <div className="phone-silhouette phone-left"></div>
               <div className="phone-silhouette phone-right"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="portfolio-card card-image">
            <div className="placeholder-phones-3">
               <div className="phone-silhouette-small phone-s-left"></div>
               <div className="phone-silhouette-small phone-s-center"></div>
               <div className="phone-silhouette-small phone-s-right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
