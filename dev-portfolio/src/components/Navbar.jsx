// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#hey">Priyank Shah</a>
      </div>

      <div className="navbar-right desktop-menu">
        <a href="/">Home</a>
        <a href="#work">Projects</a>
        <a href="#story">About</a>
        <a href="#chat">Contact</a>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

        {menuOpen && <div className="overlay" onClick={closeMenu} />}


      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <ul className="menu-items">
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="#work" onClick={closeMenu}>Projects</a></li>
          <li><a href="#story" onClick={closeMenu}>About</a></li>
          <li><a href="#chat" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
