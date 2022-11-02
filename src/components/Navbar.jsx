import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav ,setNav]=useState(false)

    const HandleClick=()=>{
        setNav(!nav)
    }
  return (
    <div className='fixed w-full top-0 h-[60px] flex justify-between items-center px-4 bg-[#020C1B] text-[#d2daf7]'>
        <div>Logo</div>
    
            
            <ul className='hidden md:flex '>
                <li className='px-4 cursor-pointer hover:text-[#64FFDA]'> <Link  to="home" smooth={true}  duration={500}>Home
                </Link></li>
           
                <li className='px-4 cursor-pointer hover:text-[#64FFDA]'> <Link  to="about" smooth={true}  duration={500}>About
                </Link></li>
                <li className='px-4 cursor-pointer hover:text-[#64FFDA]'> <Link  to="skills" smooth={true}  duration={500}>Skills
                </Link></li>
                <li className='px-4 cursor-pointer hover:text-[#64FFDA]'> <Link  to="projects" smooth={true}  duration={500}>Projects
                </Link></li>
                <li className='px-4 cursor-pointer hover:text-[#64FFDA]'> <Link  to="contact" smooth={true}  duration={500}>Contact
                </Link></li>
            </ul>
      
        <div className='md:hidden'>
            <div  onClick={HandleClick} className='md:hidden cursor-pointer z-10'>
            {!nav?<FaBars/>:<FaTimes/>}
            </div>
        <ul className={!nav?"hidden":'absolute top-16 left-0 w-full h-screen  bg-[#020C1B] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-[#64FFDA]' >Home</li>
            <li className='py-6 text-4xl hover:text-[#64FFDA]' >About</li>
            <li className='py-6 text-4xl hover:text-[#64FFDA]' >Skills</li>
            <li className='py-6 text-4xl hover:text-[#64FFDA]' >Projects</li>
            <li className='py-6 text-4xl hover:text-[#64FFDA]' >Contact</li>
            </ul></div>
        
            

      
    </div>
  )
}

export default Navbar