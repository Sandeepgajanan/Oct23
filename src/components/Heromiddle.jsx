import React from 'react'

const Heromiddle = ({ maintext,subtext}) => {
  return (
    <div className="p-3  w-[27vw]  h-[24vw] flex flex-col  items-center justify-center  gap-8 border-l border-black border-r font-[var]">
      <h1 className='text-3xl uppercase '>{maintext}</h1>
      <h2 className='text-2xl text-center '>{subtext}</h2>
    </div>
  )
}

export default Heromiddle
