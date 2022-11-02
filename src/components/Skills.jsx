import React from 'react';
import html from '../Assets/html.svg';
import  css from '../Assets/css.svg';
import javascript from '../Assets/javascript.svg';
import bootstrap from '../Assets/bootstrap.svg';
import taiwind from '../Assets/tailwind.svg';
import jquery from '../Assets/jquery.svg';
import reactjs from '../Assets/react.svg';
import git from '../Assets/git.svg';
import python from '../Assets/python.svg';





const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#020C1B] text-[#d2daf7]'>
        <div className='flex flex-col justify-center items-center w-full h-full p-4'>
          <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-20  px-4 '>
            <div className='sm:text-center pb-8 pl-4 pt-12 col-span-2'>
              <p className='text-2xl sm:text-4xl font-bold inline  border-b-4 border-[#64FFDA]'>
                Skills
              </p>
            </div>
            <div></div>
          </div>

          <div className='max-w-[1000px] w-full sm:grid grid-cols-3  grid-row-3 gap-6 p-4 '>
            <div className='sm:pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center  rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
              <img src={html} style={{width:"80px"}} alt="html-icon"></img>
              <p className='m-2 font-bold'>HTML</p>
              </div>
              
            </div>
            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center   rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
              <img src={css} style={{width:"80px"}} alt="css-icon"></img>
              <p className='m-2 font-bold'>CSS</p>

              </div>
             
            </div>
            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>

            <div className='m-auto flex flex-col justify-center items-center  rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
            <img src={javascript} style={{width:"80px"}} alt="javascript-icon"></img>
            <p className='m-2 font-bold'>JAVASCRIPT</p>
              </div>
             
              
            </div>
            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center   rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
                <img src={bootstrap} style={{width:"80px"}} alt="boostrap-icon"></img>
                <p className='m-2 font-bold'>BOOSTRAP</p>
              </div>
              
            </div>


            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center  rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
                <img src={taiwind} style={{width:"80px"}} alt="tailwind-icon"></img>
                <p className='m-2 font-bold'>TAILWIND</p>

              </div>
              
            </div>


            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center  rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
              <img src={jquery} style={{width:"80px"}} alt="jquery"></img>
              <p className='m-2 font-bold'>JQUERY</p>

              </div>
             
            </div>


            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center  rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
              <img src={reactjs} style={{width:"80px"}} alt="react-icon"></img>
              <p className='m-2 font-bold'>REACT JS</p>

              </div>
              
            </div>


            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center   rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
              <img src={python} style={{width:"80px"}} alt="python-icon"></img>
              <p className='m-2 font-bold'>PYTHON</p>

              </div>
             
            </div>
            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className='m-auto flex flex-col justify-center items-center  rounded-xl w-[200px] h-[200px]  hover:shadow-lg hover:scale-105 duration-500'>
              <img src={git} style={{width:"80px"}} alt="github-icon"></img>
              <p className='m-2 font-bold'>GITHUB</p>
              </div>
             
            </div>
          </div>


        
        </div>
    </div>
  )
}

export default Skills