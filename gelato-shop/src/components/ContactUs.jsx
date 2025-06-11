import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = ({t}) => {
  return (
    <section id="Contact" className="contact-section">
      <h2>{t.contact}</h2>

      <div className="contact-card">
        <div className="contact-left">
          <p>{t.question}</p>
          <p><FaPhoneAlt className="icon" /> <a href="tel:+1234567890">+514-419-0528</a></p>
          <p><FaEnvelope className="icon" /> <a href="mailto:platogelato@outlook.com">platogelato@outlook.com</a></p>
        </div>

        <div className="contact-right">
          <p className="follow-title">{t.follow}</p>
          <div className="social-pill-buttons">
            <a href="https://facebook.com" className="pill-button facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> <span>Facebook</span>
            </a>
            <a href="https://instagram.com/platogelato" className="pill-button instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@plato.gelato" className="pill-button tiktok" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i> <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
