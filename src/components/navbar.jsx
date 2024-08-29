import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="#" className='logo'>Portofolio.</a>
      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;