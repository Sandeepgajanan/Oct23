import React from 'react'
import { navdata } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full h-16 background flex justify-between items-center py-12 px-5 border-b border-black font-[var] max-sm:px-2 max-sm:justify-center max-sm:py-4'>
      {navdata.map((item, index) => (
        <h2
          key={index}
          className={`${index === 1 ? 'text-3xl  pl-16  max-sm:pl-0 max-sm:text-sm max-sm:whitespace-nowrap ' : 'text-sm max-sm:hidden'}`}
        >
          {item}
        </h2>
      ))}
    </nav>
  )
}

export default Navbar
