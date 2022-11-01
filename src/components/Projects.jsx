import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-full bg-[#020C1B] text-[#d2daf7]'>
        <div className='flex flex-col justify-center items-center w-full h-full p-4'>
          <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-20  px-4 '>
            <div className='sm:text-center pb-8 pl-4 pt-12 col-span-2'>
              <p className='text-4xl font-bold inline  border-b-4 border-[#64FFDA] p-2'>
                Projects
              </p>
            </div>
            <div></div>
          </div>

          <div className='max-w-[1000px] w-full sm:grid grid-cols-2  grid-row-3 gap-6  p-4 '>
            <div className='sm: pb-8 pl-4 pt-12 flex justify-center'>
              <div className="m-auto rounded-xl cursor-pointer w-[500px] h-[210px]  hover:shadow-lg  bg-[url('Assets/project1.png')] bg-cover bg-no-repeat" >
             
              
              </div>
              
            </div>
            
             
            </div>
          </div>


        
        
    </div>
    
  )
}

export default Projects