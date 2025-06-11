import React from 'react';
import './About.css';
import logo from '../assets/building.jpg';

const About = ({ t }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>{t.title}</h2>
          <p>
            <span className="highlight">{t.text}</span>
          </p>
          <p className="subtext">{t.subtext}</p>
          <a href="#location">
            <button className="about-button">{t.cta}</button>
          </a>
        </div>
        <div className="about-image">
          <img src={logo} alt="Gelato Process" />
        </div>
      </div>
    </section>
  );
};

export default About;
