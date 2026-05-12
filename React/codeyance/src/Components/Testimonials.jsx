import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: "Working with this team was a fantastic experience. They truly understood our vision and turned it into a powerful, scalable product.",
    name: "Sophia Turner",
    location: "London, UK",
    rating: 5
  },
  {
    id: 2,
    text: "Working with this team was a fantastic experience. They truly understood our vision and turned it into a powerful, scalable product.",
    name: "Sophia Turner",
    location: "London, UK",
    rating: 5
  },
  {
    id: 3,
    text: "Working with this team was a fantastic experience. They truly understood our vision and turned it into a powerful, scalable product.",
    name: "Sophia Turner",
    location: "London, UK",
    rating: 5
  },
  {
    id: 4,
    text: "Working with this team was a fantastic experience. They truly understood our vision and turned it into a powerful, scalable product.",
    name: "Sophia Turner",
    location: "London, UK",
    rating: 5
  },
  {
    id: 5,
    text: "Working with this team was a fantastic experience. They truly understood our vision and turned it into a powerful, scalable product.",
    name: "Sophia Turner",
    location: "London, UK",
    rating: 5
  },
  {
    id: 6,
    text: "Working with this team was a fantastic experience. They truly understood our vision and turned it into a powerful, scalable product.",
    name: "Sophia Turner",
    location: "London, UK",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">


      <div className="testimonials-container">
        {/* Header - Frame 8 */}
        <div className="testimonials-header">
          <span className="testimonials-subtitle">TESTIMONIALS</span>
          <h2 className="testimonials-title">
            <span className="text-green">Experiences</span> That Define<br />
            Our Work
          </h2>
        </div>

        {/* Testimonials Grid - Frame 1597880666 */}
        <div className="testimonials-grid-wrapper">
          
          {/* Top Row - Slides Left */}
          <div className="marquee-row marquee-left">
            <div className="marquee-content">
              {[...testimonialsData.slice(0, 3), ...testimonialsData.slice(0, 3)].map((testimonial, idx) => (
                <div key={`row1-${idx}`} className="testimonial-card">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Slides Right */}
          <div className="marquee-row marquee-right">
            <div className="marquee-content">
              {[...testimonialsData.slice(3, 6), ...testimonialsData.slice(3, 6)].map((testimonial, idx) => (
                <div key={`row2-${idx}`} className="testimonial-card">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
