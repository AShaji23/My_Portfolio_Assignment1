import React from 'react';
import '../App.css';

const projects = [
    {
        title: 'Home Automation System with Machine Learning model',
        description: 'Developed a smart home automation system using IoT devices and integrated a machine learning model for predicting user preferences and adjusting settings accordingly.',
        role: 'Full-stack Developer',
        outcome: 'Increased efficiency and convenience for homeowners, leading to a reduction in energy consumption and improved comfort.',
        image: '/image1.jpg', // Replace with actual image URL
      },
      {
        title: 'Online Shopping Website',
        description: 'Designed and developed a responsive e-commerce website with a user-friendly interface, secure payment gateway integration, and product recommendation engine.',
        role: 'Front-end Developer',
        outcome: 'Increased sales and customer satisfaction through an intuitive shopping experience and personalized product recommendations.',
        image: '/image2.png', // Replace with actual image URL
      },
      {
        title: 'Rent a Car',
        description: 'Built a web platform for renting cars with features such as vehicle selection, booking management, and user reviews. Implemented secure authentication and payment processing.',
        role: 'Full-stack Developer',
        outcome: 'Streamlined the car rental process for both customers and rental companies, resulting in increased bookings and revenue.',
        image: '/image3.png', // Replace with actual image URL
      },
];

const Projects = () => (
  <div className="page-container projects-page">
    <h1>Projects</h1>
    <div className="projects-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Outcome:</strong> {project.outcome}</p>
      </div>
    ))}
  </div>
  </div>
);

export default Projects;
