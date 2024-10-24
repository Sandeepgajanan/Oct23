import React from 'react'
import greatest from '../assets/greatest.jpg'
import man from '../assets/man.jpg'

const Genius = () => {
  return (
    <div className="w-full min-h-screen p-8 background max-sm:min-h-screen max-sm:p-2">
      <div className="flex gap-8 max-sm:flex-col max-sm:gap-4">
        <div className="w-1/2 p-4 border-r border-black max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:pb-4">
          <h1 className="text-[4vw] leading-[4vw] text-center font-[var] mb-4 uppercase max-sm:text-[6vw] max-sm:leading-[6vw]">cometh the hour cometh the man</h1>
          <img src={greatest} className="w-full object-cover max-sm:h-64" alt="Greatest" />
        </div>
        <div className="w-1/2 p-1 max-sm:w-full max-sm:p-0">
          <h2 className="text-[4vw] uppercase whitespace-nowrap leading-none font-bold max-sm:text-[6vw] max-sm:text-center max-sm:mb-4">The Rise: Kohli's Redemption</h2>
          <img src={man} alt="Virat Kohli after winning the match" className="w-full object-cover mb-4 " />
        </div>
      </div>
    </div>
  )
}

export default Genius
