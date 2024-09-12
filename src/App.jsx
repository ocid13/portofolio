import React, {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import './App.css'
import Navbar from './components/navbar'
import HomeSection from './components/homeSection'
import AboutSection from './components/aboutSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/contactSection'
import FooterSection from './components/footerSection'

function App() {
  useEffect(() => {
    ScrollReveal().reveal('.home-content, .heading', {
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
      origin: 'top',
    });

    ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {
      reset: false,
      distance: '80px',
      duration: 2000,
      delay: 200,
      origin: 'bottom',
    });

    ScrollReveal().reveal('.home-content h1, .about-img', {
      reset: false,
      distance: '80px',
      duration: 2000,
      delay: 200,
      origin: 'left',
    })

    ScrollReveal().reveal('.home-content p, .about-content', {
      reset: false,
      distance: '80px',
      duration: 2000,
      delay: 200,
      origin: 'right',
    })
  }, []);

  return (
    <>
      <div className='App'>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  )
}

export default App
