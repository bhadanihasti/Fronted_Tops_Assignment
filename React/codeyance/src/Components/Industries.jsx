import React from 'react';
import './Industries.css';

const industriesData = [
  {
    name: 'Business App',
    icon: <i className="fa-solid fa-briefcase"></i>
  },
  {
    name: 'Fintech',
    icon: <i className="fa-solid fa-coins"></i>
  },
  {
    name: 'Healthcare',
    icon: <i className="fa-solid fa-heart-pulse"></i>
  },
  {
    name: 'E-Commerce',
    icon: <i className="fa-solid fa-cart-shopping"></i>
  },
  {
    name: 'Real Estate',
    icon: <i className="fa-solid fa-building"></i>
  },
  {
    name: 'Sports',
    icon: <i className="fa-solid fa-trophy"></i>
  },
  {
    name: 'Fitness',
    icon: <i className="fa-solid fa-dumbbell"></i>
  },
  {
    name: 'Logistics',
    icon: <i className="fa-solid fa-truck-fast"></i>
  },
  {
    name: 'Travel',
    icon: <i className="fa-solid fa-suitcase-rolling"></i>
  },
  {
    name: 'Education',
    icon: <i className="fa-solid fa-graduation-cap"></i>
  },
  {
    name: 'Aviation',
    icon: <i className="fa-solid fa-plane"></i>
  },
  {
    name: 'Entertainment',
    icon: <i className="fa-solid fa-clapperboard"></i>
  }
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">
        {/* Frame 8 */}
        <div className="industries-header">
          <span className="industries-subtitle">INDUSTRIES</span>
          <h2 className="industries-title">
            <span className="text-green">Driving Transformation</span> Across<br />
            Diverse Industries
          </h2>
        </div>

        {/* Frame 360 */}
        <div className="industries-grid-wrapper">
          <div className="industries-grid">
            {industriesData.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">
                  {industry.icon}
                </div>
                <p className="industry-name">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
