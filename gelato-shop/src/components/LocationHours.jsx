import React from 'react';
import './LocationHours.css';

const LocationHours = ({t}) => {
  return (
    <section id="location" className="location-hours-section">
      <div className="location-content">
        <h2 className="section-title">{t.title}</h2>
        <p className="address">📍{t.address}</p>
        <div className="hours">
          <h3>{t.hourtitle}</h3>
          <ul>
            <li>{t.hours}</li>
          </ul>
        </div>

        {/* Embedded Google Map */}
        <div className="map-container">
          <iframe
            title="gelato-shop-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0822352234363!2d-73.58163622394879!3d45.52855067107499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bdae87a15a5%3A0x8fa932dd466350f6!2s1139%20Mont-Royal%20Ave%20E%2C%20Montreal%2C%20QC%20H2J%201X9!5e0!3m2!1sen!2sca!4v1745784214096!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </section>
  );
};

export default LocationHours;
