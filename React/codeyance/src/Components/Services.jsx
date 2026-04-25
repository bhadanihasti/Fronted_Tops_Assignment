import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-block">
        <div className="services-header">
          <span className="services-label">Our Service</span>
          <h2 className="services-title">
            <span className="services-highlight">Comprehensive</span> Solutions
            For
            <br />
            Next-Gen Products
          </h2>
        </div>

        <div className="services-cards">
          <article className="service-card light-card">
            <div className="card-heading-wrap">
              <h3>Product Design</h3>
              <span className="card-arrow">→</span>
            </div>
            <p>
              We design digital products that are intuitive, scalable, and built
              around real user needs. From early-stage concept validation to
              high-fidelity UI systems, our product design process focuses on
              usability, clarity, and measurable business impact.
            </p>
            <ul className="service-list">
              <li>UX research & user journey mapping</li>
              <li>Wireframes & interactive prototypes</li>
              <li>UI design systems</li>
              <li>Product redesign & optimization</li>
            </ul>
          </article>

          <article className="service-card dark-card">
            <div className="card-heading-wrap">
              <h3>Mobile App Development</h3>
              <span className="card-arrow">→</span>
            </div>
            <p>
              We build high-performance mobile applications that deliver
              seamless user experiences across platforms. Whether native or
              cross-platform, our mobile solutions are optimized for
              performance, scalability, and long-term maintainability.
            </p>
            <ul className="service-list">
              <li>Cross-platform app development</li>
              <li>Native iOS & Android solutions</li>
              <li>API integrations</li>
              <li>App performance optimization</li>
              <li>App Store & Play Store deployment support</li>
            </ul>
          </article>

          <article className="service-card black-card">
            <div className="card-heading-wrap">
              <h3>Web Development</h3>
              <span className="card-arrow">→</span>
            </div>
            <p>
              We develop modern, responsive, and scalable web applications tailored to your business objectives. Our web solutions prioritize speed, security, and user experience while maintaining clean, maintainable code architecture. 
            </p>
            <ul className="service-list">
              <li>Custom web applications</li>
              <li>Responsive website development</li>
              <li>Admin panels & dashboards</li>
              <li>CMS & dynamic content systems</li>
              <li>Performance & SEO optimization</li>
            </ul>
          </article>

           <article className="service-card light-card">
            <div className="card-heading-wrap">
              <h3>Backend Development</h3>
              <span className="card-arrow">→</span>
            </div>
            <p>
              A strong backend is the foundation of every successful digital product. We design and build secure, scalable server-side architectures that power seamless user experiences across web and mobile platforms.
            </p>
            <ul className="service-list">
              <li>RESTful & GraphQL API development</li>
              <li>Database architecture & optimization</li>
              <li>Cloud infrastructure setup</li>
              <li>Authentication & security systems</li>
              <li>Payment gateway & third-party integrations</li>
            </ul>
          </article>

          <article className="service-card dark-card">
            <div className="card-heading-wrap">
              <h3>SaaS Development</h3>
              <span className="card-arrow">→</span>
            </div>
            <p>
              We help startups and businesses build scalable Software-as-a-Service platforms from idea to launch. Our SaaS development approach focuses on multi-tenant architecture, subscription models, and long-term scalability.
            </p>
            <ul className="service-list">
              <li>SaaS product architecture</li>
              <li>Subscription & billing system integration</li>
              <li>Multi-tenant platform development</li>
              <li>Admin & analytics dashboards</li>
              <li>Ongoing scaling & optimization</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
