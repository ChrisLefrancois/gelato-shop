import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = ({ t, currentLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <img src={logo} alt="Gelato Bliss Logo" className="logo-img" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about">{t.about}</a>
        <a href="#location">{t.location}</a>
        <a href="#Contact">{t.contact}</a>
        <div className="language-switcher">
          <button
            onClick={() => onLanguageChange(currentLanguage === 'en' ? 'fr' : 'en')}
          >
            {currentLanguage === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
