import React from 'react'

import JavaScript from '../../assets/javascript.png'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import ReactImg from '../../assets/react.png'
import Github from '../../assets/github.png'
import Tailwind from '../../assets/tailwind.png'

function Skills() {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#DAD7CD] text-[#3A5A40] pt-8'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
            <div>
                <p className='font-bold text-4xl inline border-b-2 border-[#333333]'>Skills</p>
                <p className='py-4'>// These are the tools that I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'> 
                <div className='shadow-sm hover:shadow-md shadow-[#040c16] transform hover:scale-105 duration-500 rounded-md'>
                    <img className='w-20 mt-4 mx-auto' src={HTML} alt="HTMLicon" />
                    <p className='py-4 font-semibold'>HTML</p>
                </div>
                <div className='shadow-sm hover:shadow-md shadow-[#040c16] transform hover:scale-105 duration-500 rounded-md'>
                    <img className='w-20 mt-4 mx-auto' src={CSS} alt="CSSicon" />
                    <p className='py-4 font-semibold'>CSS</p>
                </div>
                <div className='shadow-sm hover:shadow-md shadow-[#040c16] transform hover:scale-105 duration-500 rounded-md'>
                    <img className='w-20 mt-4 mx-auto' src={JavaScript} alt="JSicon" />
                    <p className='py-4 font-semibold'>Javascript</p>
                </div>
                <div className='shadow-sm hover:shadow-md shadow-[#040c16] transform hover:scale-105 duration-500 rounded-md'>
                    <img className='w-20 mt-4 mx-auto' src={ReactImg} alt="ReactJSicon" />
                    <p className='py-4 font-semibold'>React JS</p>
                </div>
                <div className='shadow-sm hover:shadow-md shadow-[#040c16] transform hover:scale-105 duration-500 rounded-md'>
                    <img className='w-20 mt-4 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='py-4 font-semibold'>Tailwind</p>
                </div>
                <div className='shadow-sm hover:shadow-md shadow-[#040c16] transform hover:scale-105 duration-500 rounded-md'>
                    <img className='w-20 mt-4 mx-auto' src={Github} alt="Github icon" />
                    <p className='py-4 font-semibold'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills