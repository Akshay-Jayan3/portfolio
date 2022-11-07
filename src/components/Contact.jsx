import React from 'react';
import instagram from '../Assets/insta.svg';
import linkedin from '../Assets/linkedin.svg';
import github from '../Assets/github.svg';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#020C1B] text-[#d2daf7]'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-20  px-4 '>
            <div className='sm:text-center pb-8 pl-4 pt-12 col-span-2'>
                <p className='text-2xl sm:text-4xl font-bold inline  border-b-4 border-[#64FFDA]'>
                    Get In Touch
                </p>
            </div>
            
        </div>


        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-8 '>
          
          <div className='flex flex-col justify-center  items-start p-12'>
                <div className='basis-32'>
                <h6 className='text-[#64FFDA] mb-2'>Email</h6>
                <p>akshayjayan321@gmail</p>
                </div>
                <div className='basis-32'>
                <h6 className='text-[#64FFDA] mb-2'>Telephone</h6>
                <p>+919061196145</p>
                </div>
                <div className='basis-40'>
                <h6 className='text-[#64FFDA] mb-2'>Address</h6>
                <p>Kuzhikannil T P Puram P O Vazhoor ,Kottayam,Kerala,India</p>
                </div>
                <div className='w-[200px]  ml-0 flex justify-between m-8'>
                    <div className=' w-[50px] h-[40px] flex justify-center items-center rounded-xl hover:shadow-3xl hover:scale-105 duration-500 '><a href="https://www.linkedin.com/in/-akshay-jayan"><img className="cursor-pointer" src={linkedin} alt="linked-icon" style={{width:"30px"}}/></a></div>
                    <div className=' w-[50px] h-[40px] flex justify-center items-center rounded-xl hover:shadow-3xl hover:scale-105 duration-500'><a href="https://instagram.com/akshay_jayan_?igshid=YmMyMTA2M2Y"><img className="cursor-pointer" src={instagram} alt="insta-icon" style={{width:"30px"}}></img></a></div>
                    <div className=' w-[50px] h-[40px] flex justify-center items-center rounded-xl hover:shadow-3xl hover:scale-105 duration-500'><a href='https://github.com/Akshay-Jayan3'><img className="cursor-pointer" src={github} alt="github-icon" style={{width:"30px"}}/></a></div>

                 </div>
            </div>
           
            
          
          <div className=' w-full px-8 py-4' >
            <form className=' flex flex-col justify-center items-end'>
                
                <input className='ml-5 mb-8 p-2 bg-[#020C1B] border-2 rounded-md border-[#d2daf7] w-full focus:outline-none focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]' type="text" placeholder='Name' name="name" required/>
                
               
                <input className='ml-5 mb-8 p-2 bg-[#020C1B] border-2 rounded-md border-[#d2daf7] w-full focus:outline-none focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]' type="email" placeholder='Email' name="email" required/>
                
                <textarea className='ml-5 mb-8 p-2 bg-[#020C1B] border-2 rounded-md border-[#d2daf7] w-full focus:outline-none focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]' type="text" placeholder="Message" name="message" rows="10" required></textarea>
                <div className='flex justify-end w-full'>
                <button className=' ml-5  border-2 border-[#64FFDA] rounded-md bg-[#020C1B] p-3 text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#020C1B] hover:font-bold'>Submit</button>
                </div>
            

            </form>
          </div>
        </div>
        <div className=' w-full  text-[12px] text-center p-8'>
            <p className='hover:text-[#64FFDA]'>Desiged & Developed by Akshay Jayan. </p>
        </div>


        </div>
    </div>
  )
}

export default Contact