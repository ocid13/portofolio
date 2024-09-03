import React from 'react';

const Navbar = () => {
  return (
    <header className='header'>
      <a href="#" className='logo'>Portfolio</a>
      <nav className='navbar'>
        <a href="#home" className='active'>Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;