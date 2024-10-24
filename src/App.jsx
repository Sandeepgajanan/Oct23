import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { herodata1, herodata2, middledata } from './constants'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Fightback from './components/Fightback'
import Genius from './components/Genius'
import Lenis from "lenis";
import { motion } from 'framer-motion'

const App = () => {
  const [isLoaderDone, setIsLoaderDone] = useState(false)

  useEffect(() => {
    if (isLoaderDone) {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, [isLoaderDone]);

  return (
    <div className='bg-zinc-900 relative w-full min-h-screen overflow-hidden'>
      <Loader onLoaderComplete={() => setIsLoaderDone(true)} />
      {isLoaderDone && (
        <motion.div
          initial={{ opacity: 0, y: "100vh", scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1, }}
          transition={{
            duration: 2,
            ease: "easeOut",
            opacity: { duration: 2 },
          }}
        >
          <Navbar />
          <Hero data={herodata1} middledata={middledata[0]} />
          <Heading />
          <Fightback />
          <Hero data={herodata2} middledata={middledata[1]} />
          <Marquee />
          <Genius />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App