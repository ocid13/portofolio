import React from "react";
import abut from '../assets/image/image2.png'

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={abut} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>I am a final semester student at Muhamdmmadiyah University of Jakarta, majoring in Informatics Engineering. 
          I have a strong interest in pursuing a career as a Frontend Developer and possess basic skills in web programming, 
          especially using JavaScript and the React library. My experience includes participating in the Independent Study Internship 
          Program (MSIB) in batches 3 and 5.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  )
}

export default AboutSection;
