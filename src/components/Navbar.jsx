import React from 'react'
import { navdata } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full h-16 background flex justify-between items-center py-12 px-5 border-b border-black font-[var]'>
      {navdata.map((item, index) => (
        <h2 
          key={index} 
          className={`${index === 1 ? 'text-3xl  pl-16' : 'text-sm'}`}
        >
          {item}
        </h2>
      ))}
    </nav>
  )
}

export default Navbar
