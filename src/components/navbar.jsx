import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className='header'>
      <a href="#" className='logo'>Portfolio.</a>
      <i className='bx bx-menu' id='menu-icon' onClick={toggleMenu}></i>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu} className='active'>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;