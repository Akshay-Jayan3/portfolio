import React from 'react'
import instagram from '../Assets/insta.svg';
import linkedin from '../Assets/linkedin.svg';
import github from '../Assets/github.svg';
import home4 from '../Assets/home4.svg';


const Home = () => {
  return (
    <div name="home"  className='w-full h-screen bg-[#020C1B] sm:grid grid-cols-2 gap-2 '>

      <div className='w-[500px] m-4 sm:ml-14 px-4 h-full flex flex-col justify-center'>
        <p className='text-[#64FFDA] font-bold text-2xl'>Hello ,</p>
        <h1 className=' text-4xl sm:text-5xl  font-bold text-[#d2daf7]'>I am Akshay Jayan</h1>
        <h2 className='text-2xl sm:text-4xl font-bold py-4  text-[#8b90a1]'>A Creative Front-end Developer</h2>
        <p className=' font-bold text-left text-[13px] sm:text-[18px] text-[#6f768b]  md:max-w-[500px] '>I am front-end developer specialized in designing and developing responsive ,optimized and efficient websites.</p>
        <div className='w-[200px]  ml-0 flex justify-between m-8'>
          <a href="https://www.linkedin.com/in/-akshay-jayan"><img className="cursor-pointer" src={linkedin} alt="linked-icon" style={{width:"40px"}}/></a>
          <a href=""><img className="cursor-pointer" src={instagram} alt="insta-icon" style={{width:"40px"}}/></a>
          <a href='https://github.com/Akshay-Jayan3'><img className="cursor-pointer" src={github} alt="github-icon" style={{width:"40px"}}/></a>

        </div>
       
      </div>
      <div className='hidden md:flex flex-col justify-center max-w-[1000px] w-[500px] h-full mx-auto '> <img src={home4} alt="homepic"   /></div>

    </div>
  )
}

export default Home