import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'
import fotoprofil from '../assets/fotoprof1.png'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#DAD7CD] text-[#3A5A40] pb-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
                <div className='pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-2 border-[#333333]'>
                    About
                    </p>
                </div> 
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    <img className='w-600 mx-auto rounded-md' src={fotoprofil} alt="Foto Profil" />
                </div>
                <div>
                    <p className='pb-4 sm:pb-2 text-left text-4xl font-bold'>I'm Zidan, nice to meet you. Please take a look around.</p>
                    <p className='sm:pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Sint velit accusamus impedit, 
                        suscipit tenetur ipsam quas fugiat atque molestias. 
                        Suscipit nisi autem illum unde error cum praesentium atque nesciunt voluptatibus?
                    </p>
                </div>
            </div>
            <div></div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            {/* Placeholder for the empty column */}
                <div className='sm:text-right'></div> 
                {/* Aligns the button to the right */}
                    <div className='flex justify-end'> 
                        <a href='https://drive.google.com/file/d/18eHsuDgg9g7rTa9e_rBVyE8heQiLhh0a/view?usp=drive_link' target='blank_'>
                        <button className='bg-[#DAD7CD] text-[#3A5A40] px-6 py-3 my-2 flex items-center transition-colors duration-300 hover:bg-[#588157] hover:text-white hover:shadow-md rounded-full'>
                        <HiArrowNarrowDown className='mr-3'/> My Resume 
                        </button>
                        </a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About