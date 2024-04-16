import React from 'react'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import About from './components/About'
import Eyes from './components/Eyes'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className='font-main -full h-screen bg-[#f1f1f1]'>
      <NavBar/>
      <LandingPage/>
      <About/>
      <Eyes/>
      <Cards/>
    </div>
  )
}

export default App
