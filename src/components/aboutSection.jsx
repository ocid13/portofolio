import React from "react";
import abut from '../assets/image/about.png'

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={abut} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ducimus quaerat tenetur, qui obcaecati vitae eos iste maxime odit quisquam nemo eius ea recusandae hic optio soluta! Voluptate excepturi eveniet quo possimus, consequuntur porro, quasi magni voluptatem numquam architecto quod sapiente, et repudiandae qui rerum. Saepe!</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  )
}

export default AboutSection;
