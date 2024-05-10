import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
  const scrollToWorkSection = () => {
    const workSection = document.querySelector('[name="work"]');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div name='home' className='w-full h-screen bg-[#DAD7CD]'>
        
        {/* {Container} */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#333333]'><span className='font-semibold'>Hi, my name is</span></p>
            <h1 className='text-3xl sm:text-6xl font-bold text-[#3A5A40]'>Ilma Khoiruzzidan</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#3a5a40d5]'>I'm a Front-end Developer.</h2>
            <p className='text-[#3a5a40d5] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Hic repudiandae sunt tempora animi magnam laborum, quod explicabo quisquam quos.
                 Commodi magni sed dolor harum eum, accusantium odio sequi provident eaque?</p>
            <div>
                <button className='bg-[#DAD7CD] text-[#3A5A40] px-6 py-3 my-2 flex items-center transition-colors duration-300 hover:bg-[#588157] hover:text-white hover:shadow-md rounded-full'  onClick={scrollToWorkSection}>
                 View Work 
                <HiArrowNarrowRight className='ml-3'/>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Home