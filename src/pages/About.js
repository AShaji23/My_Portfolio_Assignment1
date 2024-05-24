import React from 'react';
import '../App.css';
//import myPhoto from '../assets/myPhoto.jpg';

const About = () => (
  <div className="page-container about-page">
    <h1>About Me</h1>
    <div className="logo">
        <img src="/myPhoto.jpg" alt="myPhoto" /> {/* Ensure your logo is in the public directory */}
      </div>
    <p>Hi, I'm Ashwin Shaji. I am a web developer with a passion for creating dynamic and responsive web applications...</p>
  </div>
);

export default About;
