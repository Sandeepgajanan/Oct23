import React from 'react'

const Herocard = ({val}) => {
  return (
    <div className="hero-card  p-2  w-[27vw]  h-[24vw]   flex flex-col  justify-center ">
    <div className="hero-card-img w-full h-[18vw] " >
      <img src={val.img} alt="" className=' w-full h-full  rounded-md' />
    </div>
    <h2 className='text-xl  text-center font-bold   mt-2'>{val.text1} </h2>
    <p className='text-lg text-center font-bold mt-2 '>{val.text2}</p>
  </div>
  )
}

export default Herocard
