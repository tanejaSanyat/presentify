
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import About from './components/About'
import Eyes from './components/Eyes'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    document.title = "Presentify"; // Set your website title here
  }, []);
  // eslint-disable-next-line no-unused-vars
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
