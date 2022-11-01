import React from 'react';
import profile from '../Assets/profile.svg';
import music from '../Assets/music.svg';
import art from '../Assets/art.svg';
import game from '../Assets/game.svg';
import coffee from '../Assets/coffe.svg';
import video from '../Assets/video.svg';



const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#020C1B] text-[#d2daf7]'>
    <div className='flex flex-col justify-center items-center w-full h-full '>
      <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-20  px-4 '>
        <div className='sm:text-center pb-8 pl-4 pt-12 col-span-2'>
          <p className='text-4xl font-bold inline  border-b-4 border-[#64FFDA]'>
            About
          </p>
        </div>
        <div></div>
      </div>


        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-8 '>
          <div className='p-12'>
          <img src={profile} style={{width:"300px"}}alt="profilepic" ></img>
          </div>
          <div className='p-12'>
            <p className='text-2xl p-6'>Hello ,my name is Akshay and I love designing ad developing cool websites.I am passionate about UI-UX design and front-end technologies. I specialize in creating responsive ,optimized and efficient websites using react.</p>
          </div>
        </div>


        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-4'>
          <div className='max-w-[1000px] w-full grid sm:grid-row-2 px-4'>
            <div className=' pt-24 sm:pl-10 flex flex-cols items-end ' >
                <p className='text-4xl font-bold inline  border-b-4 border-[#64FFDA] mb-8 p-2'>
                My Interests
                </p>
                
                
            </div>
            <div >
            <div className='flex justify-between mt-10 p-9'>
                <img src={music}  alt="music icon" style={{width:"50px"}}></img>
                <img src={art}  alt="brush icon" style={{width:"50px"}}></img>
                <img src={game}  alt="game icon" style={{width:"50px"}}></img>
                <img src={coffee}  alt="coffee icon" style={{width:"50px"}}></img>
                <img src={video}  alt="video icon" style={{width:"50px"}}></img>


                </div>
            </div>
          
          </div>
          <div className='p-9'>
            <p className='mb-4 sm:text-2xl m-1'><span className='font-bold text-[#64FFDA]'>NAME : </span>Akshay Jayan </p>
            <p className='mb-4 sm:text-2xl m-1'><span className='font-bold text-[#64FFDA]'>DATE OF BIRTH : </span>03/11/1999</p>
            <p className='mb-4 sm:text-2xl m-1'><span className='font-bold text-[#64FFDA]'>NATIONALITY : </span>Indian</p>
            <p className='mb-4 sm:text-2xl m-1'><span className='font-bold text-[#64FFDA]'>PHONE : </span>+919061196145</p>
            <p className='mb-4 sm:text-2xl ml-1'><span className='font-bold text-[#64FFDA]'>EMAIL : </span>akshayjayan321@gmail.com</p>
            <div><button className='mt-10 border-2 border-[#64FFDA] rounded-md bg-[#020C1B] p-3 text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#020C1B] hover:font-bold'>DOWNLOAD CV</button></div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default About