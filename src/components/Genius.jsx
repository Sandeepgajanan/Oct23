import React from 'react'
import greatest from '../assets/greatest.jpg'
import man from '../assets/man.jpg'

const Genius = () => {
  return (
    <div className="w-full min-h-screen p-8  background">
      <div className="flex  gap-8 ">
        <div className="w-1/2 p-4 border-r border-black">
          <h1 className="text-[4vw] leading-[4vw] text-center  font-[var] mb-4 uppercase">cometh the hour cometh the man</h1>
          <img src={greatest} className="w-full object-cover" />
        </div>
        <div className="w-1/2 p-1">
            <h2 className="text-[4vw] uppercase whitespace-nowrap leading-none font-bold">The Rise: Kohli's Redemption</h2>
            <img src={man} alt="Virat Kohli after winning the match" className="w-full  object-cover mb-4 " />
        </div>
      </div>
    </div>
  )
}

export default Genius
