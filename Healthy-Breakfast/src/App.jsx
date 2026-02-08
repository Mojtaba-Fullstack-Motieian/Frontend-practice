import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
      <>
      <div className='w-full h-screen relative overflow-hidden'>
        <div className='w-3/2 h-full bg-orange-400 absolute translate-x-1/2 -right-18 -rotate-45'></div>
        <Navbar/>
        <Header/>
      </div>
      </>
  );
}

export default App
