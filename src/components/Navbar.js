import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="logo">
        <img src="/logo.png" alt="Logo" /> {/* Ensure your logo is in the public directory */}
      </div>
    <Link to="/">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
