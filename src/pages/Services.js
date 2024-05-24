import React from 'react';
import '../App.css';

const services = [
  { name: 'Web Development', image: '/webdev.jpg' },
  { name: 'Mobile Apps', image: '/mobileapps.jpg' },
  { name: 'UI/UX Design', image: '/uiux.png' },
];

const Services = () => (
  <div className="page-container services-page">
    <h1>Services</h1>
    <div className="services-grid">
    {services.map((service, index) => (
      <div key={index}>
        <h2>{service.name}</h2>
        <img src={service.image} alt={service.name} className="service-image" />
      </div>
    ))}
  </div>
  </div>
);

export default Services;
