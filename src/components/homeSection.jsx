import React from "react";
import 'boxicons';
import guehh from '../assets/image/Rosyid.jpg'
import con from '../assets/image/home.png'

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Haida Khoirurrosyid</h1>
        <h3>And I'm a <span>Frontend Developer</span></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium culpa optio repudiandae dolorum id earum suscipit blanditiis.</p>
        <div className="social-media">
          <a href="#"><i className="bx bxl-instagram-alt"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="#"><i className="bx bxl-github"></i></a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={con} alt="Gueh" />
      </div>
    </section>
  )
}

export default HomeSection;
