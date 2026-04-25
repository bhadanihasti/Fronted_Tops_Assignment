import React from 'react';
import './Technologies.css';

import reactImg from '../assets/react.png';
import nextImg from '../assets/next.js.png';
import jsImg from '../assets/js.png';
import reactIonicImg from '../assets/react lonic.png';
import tsImg from '../assets/typescript.png';

const Technologies = () => {
  const tabs = [
    { name: 'Front End', active: true },
    { name: 'Backend', active: false },
    { name: 'App Development', active: false },
    { name: 'Database', active: false },
    { name: 'DevOps and Cloud', active: false },
    { name: 'Payment', active: false },
    { name: 'Product Design', active: false },
  ];

  const technologies = [
    { name: 'React.js', img: reactImg },
    { name: 'Next.js', img: nextImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'React Ionic', img: reactIonicImg },
    { name: 'Typescript', img: tsImg },
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">
        {/* Frame 8 */}
        <div className="tech-header">
          <span className="tech-subtitle">TECHNOLOGIES</span>
          <h2 className="tech-title">
            <span className="text-green">Deep Technology</span> Expertise<br />
            That Drives Real Innovation
          </h2>
        </div>

        {/* Frame 19 */}
        <div className="tech-content">
          {/* Frame 18 */}
          <div className="tech-tabs">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tech-tab ${tab.active ? 'active' : ''}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Frame 1597888545 */}
          <div className="tech-cards">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">
                  <img src={tech.img} alt={tech.name} />
                </div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
