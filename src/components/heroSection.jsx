import React from "react";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, It's Me</h1>
        <h2>Haida Khoirurrosyid</h2>
        <h3>And I'm a <span className="highlight">Frontend Developer</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio rem saepe laborum? Voluptatem, corrupti? Incidunt molestiae minus odio fugiat deleniti quas recusandae perspiciatis expedita, velit saepe veritatis assumenda pariatur deserunt.</p>
        <a href="#download-cv" className="btn">Download CV</a>
        <div className="social-links">
          <a href="instagram">Instagram</a>
          <a href="linkedin">Linkedin</a>
          <a href="github">Github</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={Rosyid} alt="Gue" />
      </div>
    </section>
  )
}

export default HeroSection;
