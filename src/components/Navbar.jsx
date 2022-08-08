import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="  mx-auto md:bg-blue-500  xl:bg-gray-700  bg-red-600 flex lg:justify-start items-center">
        <div className='logo p-2 '>
            <img src="../../public/img/logo.png" width="100" alt="Logo"  />
        </div>

        <div className='enlaces lg:block hidden md:w-11/12'>
            <div className='flex items-center justify-center gap-5'>
                <Link to="/" className='link'>Home</Link>
                <Link to="/play" className='link'>Play Together</Link>
                <Link to="/explore" className='link '>Explore</Link>
                <Link to="/bowser" className='link-border-yellow'>Bowser Fury</Link>
                <Link to="/buy" className='rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500 '>Buy Now</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar