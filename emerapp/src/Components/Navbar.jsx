import React from 'react'
import logo from "../assets/logo.jpg"
import { useState, useEffect } from 'react'



const Navbar = () => {
    const [seeText, setSeeText] = useState(false)
  return (
    <nav className='flex justify-between'>
        <div className='py-4  justify-between relative space-x-1 flex items-center'
          onMouseEnter={() => setSeeText(true)}
          onMouseLeave={() => setSeeText(false)}>
            <img
            src={logo} width={100} height={100} alt='logo'/>
                    <span
          className={`absolute left-2 transition-all duration-400 ease-in-out text-gray-700 px-1 whitespace-nowrap text-3xl font-bold relative ${
            seeText ? "opacity-100 translate-x-4" : "opacity-0 translate-x-0"
          }`}
        >
            Emergency Aid
        </span>
        </div>
        <ul className='flex-end flex p-10 '>
                <a href="/" className='mx-10 font-semibold'>
                    Contact 
                </a>
                <a href='#' className='mx-10 font-semibold'>
                    Hospitals
                </a>
                <a href='#' className='mx-10 font-semibold'>
                    About 
                </a>
        </ul>
 
    </nav>
  )
}

export default Navbar
