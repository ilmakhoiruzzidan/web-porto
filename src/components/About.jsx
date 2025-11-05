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
                    <p className='pb-4 sm:pb-2 text-left text-4xl font-bold'>You can call me Zidan. Here is my backround.</p>
                    <p className='sm:pt-2 text-justify'>My education background is that I graduated on January 2024 from Universitas Islam Indonesia with major Informatics. 
                    For my work experiences, i do internship as Wordpress Developer on PT. Pameo Solusi Indonesia on August - December 2022. Currently, i'm exploring my expertise
                    from data analysis and backend development. I'm ready to impove and adapt to the new technologies. 
                    Please check out my resume/CV by pressing<strong className='text-lg'> My Resume</strong>  button below.
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
                        <button className="bg-[#3A5A40] text-[#DAD7CD] px-6 py-3 my-2 flex items-center rounded-full 
                            transition-all duration-300 hover:bg-[#4C7351] hover:scale-105 hover:shadow-md">
                            <HiArrowNarrowDown className="mr-3" /> My Resume
                        </button>
                        </a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About