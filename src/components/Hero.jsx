import React from 'react'
import Herocard from './Herocard'
import Heromiddle from './Heromiddle'

const Hero = ({ data, middledata }) => {

  return (
    <div className="flex items-center justify-between w-full p-5 background pt-10 text-black max-sm:flex-col  max-sm:gap-6 max-sm:p-0">
      {data && data[0] && <Herocard val={data[0]} />}
      <Heromiddle {...middledata} />
      {data && data[1] && <Herocard val={data[1]} />}
  
    </div>
  )
}

export default Hero