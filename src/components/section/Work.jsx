import React from 'react'
import WorkImg from '../../assets/workImg.jpeg'
import Project2Img from '../../assets/project2.jpg'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen bg-[#DAD7CD] text-[#3A5A40] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-[#333333]'>Work</p>
                <p className='py-6'>// Check out some of my recent Projects</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
               
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Belanja Skuy
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' style={{ display :'none' }}>Demo</button>
                            </a>
                            <a href="https://github.com/ilmakhoiruzzidan/Belanja-Skuy" target='blank_'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Project2Img})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-xl font-semibold text-white tracking-wider'>
                            Image Recognition using TensorFlow
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/ilmakhoiruzzidan/image-recognition-tf" target='blank_'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                {/* Batas */}
            </div>
        </div>
    </div>
  )
}

export default Work