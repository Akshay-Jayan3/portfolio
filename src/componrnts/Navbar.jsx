import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav ,setNav]=useState(false)

    const HandleClick=()=>{
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-900 text-gray-300'>
        <div>Logo</div>
    
            
            <ul className='hidden md:flex '>
                <li className='px-4 cursor-pointer' >Home</li>
                <li className='px-4 cursor-pointer'>About</li>
                <li className='px-4 cursor-pointer'>Skills</li>
                <li className='px-4 cursor-pointer'>Contact</li>
            </ul>
      

        <div  onClick={HandleClick} className='md:hidden cursor-pointer z-10'>
            {!nav?<FaBars/>:<FaTimes/>}
        </div>
        <ul className={!nav?"hidden":'absolute top-9 left-0 w-full h-screen  bg-blue-900 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl' >Home</li>
            <li className='py-6 text-4xl' >About</li>
            <li className='py-6 text-4xl' >Skills</li>
            <li className='py-6 text-4xl' >Contact</li>
            </ul>

      
    </div>
  )
}

export default Navbar