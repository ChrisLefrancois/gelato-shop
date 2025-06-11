import React from 'react';
import './HeroBanner.css'; // Link to your CSS

const HeroBanner = ({ t }) => {
  return (
    <section className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <a href="#location" className="hero-cta">{t.cta}</a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
