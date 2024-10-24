import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { herodata1, herodata2, middledata } from './constants'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Fightback from './components/Fightback'
import Genius from './components/Genius'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.ap'),
      smooth: true
    });

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div className='bg-zinc-900 relative w-full min-h-screen'>
      <div className='ap'>
        <Navbar />
        <Hero data={herodata1} middledata={middledata[0]} />
        <Heading />
        <Fightback />
        <Hero data={herodata2} middledata={middledata[1]} />
        <Marquee />
        <Genius />
        <Footer />
      </div>
    </div>
  )
}

export default App
