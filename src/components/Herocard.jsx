import React from 'react'

const Herocard = ({val}) => {
  return (
    <div className="hero-card p-2 w-[27vw] h-[24vw] flex flex-col justify-center max-sm:w-full max-sm:h-full">
      <div className="hero-card-img w-full h-[18vw] max-sm:h-full">
        <img src={val.img} alt="" className='w-full h-full rounded-md' />
      </div>
      <h2 className='text-xl text-center font-bold mt-2   max-sm:text-left max-sm:mt-1 max-sm:text-lg'>{val.text1}</h2>
      <p className='text-lg text-center font-bold mt-2  max-sm:text-left max-sm:mt-1 max-sm:text-sm'>{val.text2}</p>
    </div>
  )
}

export default Herocard
