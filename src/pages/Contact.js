// src/pages/Contact.js
import React from 'react';
import '../App.css';

const Contact = () => (
  <div className="page-container contact-page">
    <h1>Contact Me</h1>
    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-envelope contact-icon"></i>
        <p>Email: ashaji23@my.centennialcollege.ca</p>
      </div>
      <div className="contact-item">
        <i className="fas fa-phone contact-icon"></i>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt contact-icon"></i>
        <p>Location: Scarborough, Canada</p>
      </div>
    </div>
  </div>
);

export default Contact;
