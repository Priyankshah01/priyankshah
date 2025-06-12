import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href='/'> <strong>Priyank Shah Design</strong></a>
      </div>
      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="#work">Work</a>
        <a href="#story">Info</a>
        <a href="#chat">Let's Chat</a>
      </div>
    </nav>
  );
};

export default Navbar;
