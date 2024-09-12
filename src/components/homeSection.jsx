import React, { useEffect, useRef } from "react";
import 'boxicons';
import pphome from '../assets/image/image1.png';
import resume from '../assets/cv.pdf';
import Typed from "typed.js";

const HomeSection = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Informaticts Enginering!', 'Frontend Developer!', 'Web Developer!'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Haida Khoirurrosyid</h1>
        <h3>And I'm a <span ref={typedElement}></span></h3>
        <p>I am a final semester student at Muhammadiyah University of Jakarta, majoring in Informatics Engineering. 
          I have a strong interest in pursuing a career as a Frontend Developer. I possess basic skills in web programming.
        </p>
        <div className="social-media">
          <a href="https://www.instagram.com/hhayycidd__/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram-alt"></i></a>
          <a href="https://www.linkedin.com/in/haidakhoirurrosyid/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/ocid13" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
        </div>
        <a href={resume} download="Haida_Khoirurrosyid_CV" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={pphome} alt="Gueh" />
      </div>
    </section>
  )
}

export default HomeSection;
