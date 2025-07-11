import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = ({ t, currentLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <img src={logo} alt="Gelato Bliss Logo" className="logo-img" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={handleLinkClick}>{t.about}</a>
        <a href="#location" onClick={handleLinkClick}>{t.location}</a>
        <a href="#contact" onClick={handleLinkClick}>{t.contact}</a>
        <div className="language-switcher">
          <button onClick={() => {
            onLanguageChange(currentLanguage === 'en' ? 'fr' : 'en');
            handleLinkClick();
          }}>
            {currentLanguage === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
