import './App.css'
import Navbar from './components/navbar'
import HomeSection from './components/homeSection'
import AboutSection from './components/aboutSection'
import PortfolioSection from './components/PortfolioSection'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
      </div>
    </>
  )
}

export default App
