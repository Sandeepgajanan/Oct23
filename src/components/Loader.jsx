import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { storyLines } from '../constants'

const Loader = ({ onLoaderComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isLoaderDone, setIsLoaderDone] = useState(false)

  useEffect(() => {
    if (currentLineIndex < storyLines.length) {
      const timer = setTimeout(() => {
        if (displayedText.length < storyLines[currentLineIndex].length) {
          setDisplayedText(storyLines[currentLineIndex].slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => {
            setCurrentLineIndex(prevIndex => prevIndex + 1)
            setDisplayedText('')
          }, 1000)
        }
      }, 60)

      return () => clearTimeout(timer)
    } else {
      setTimeout(() => {
        setIsLoaderDone(true)
        onLoaderComplete() // Notify parent component that loading is complete
      }, 1000)
    }
  }, [currentLineIndex, displayedText, onLoaderComplete])

  if (isLoaderDone) {
    return null
  }

  return (
    <motion.div
      className="h-screen w-full fixed top-0 left-0 background flex flex-col items-center justify-center pointer-events-none px-2"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaderDone ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (isLoaderDone) {
          document.getElementById('loader-container').style.display = 'none'
        }
      }}
      id="loader-container"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentLineIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[3.5vw] font-bold max-sm:text-[7vw] max-sm:leading-[7vw] max-sm:text-center"
        >
          {displayedText}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  )
}

export default Loader