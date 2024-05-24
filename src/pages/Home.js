import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="page-container home-page">
    <h1>Welcome to My Portfolio</h1>
    <p className="mission-statement">Your one-stop destination to know more about my work and skills.</p>
    <p>My mission is to deliver high-quality web solutions that exceed client expectations and contribute positively to their success.</p>
    <div>
      <Link to="/about" className="btn">About Me</Link>
      <Link to="/projects" className="btn">Projects</Link>
    </div>
  </div>
);

export default Home;
