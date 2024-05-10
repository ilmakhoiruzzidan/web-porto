import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='w-full h-500 bg-[#DAD7CD] text-[#3A5A40] py-4'>
        <div className='max-w-[1000px] mx-auto px-8 flex-auto justify-center h-full'>
            <div className='font-semibold text-center '>
                <p>Copyright © 2024 Ilma Khoiruzzidan</p>
            </div>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-center h-full py-4 font-semibold'>
                <p> <a href="http://instagram.com/ilmazidan"><span>Instagram</span></a> | <a href="http://linkedin.com/in/ilmakhoiruzzidan"><span>LinkedIn</span></a> | <a href="http://github.com/ilmakhoiruzzidan"><span>GitHub</span></a></p>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer