import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/profile.png';
import {Link} from 'react-scroll';  


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DAD7CD] text-[#3A5A40] z-10'>

        {/* {Logo} */}
        <div className="flex items-center justify-between px-4 py-2">
            <a href='home'>
            <img src={logo} alt="Logo" style={{width:'30px', height:'30px', cursor:'pointer'}}/>
            </a>
            <h1 className="px-2 text-[#3A5A40] font-semibold text-lg">ilmazidan</h1>
        </div>

        {/* [Menu] */}
            <ul className='hidden md:flex'>
                <li className='text-light font-semibold'><Link to="home" smooth={true} duration={500} >Home</Link></li>
                <li className='text-light font-semibold'><Link to="about" smooth={true} duration={500} >About</Link></li>
                <li className='text-light font-semibold'><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li className='text-light font-semibold'><Link to="work" smooth={true} duration={500} >Work</Link></li>
                <li className='text-light font-semibold'><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
            </ul>
        
        {/* {Hamburger} */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>


        {/* {Mobile menu} */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#DAD7CD] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} >Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link></li>
            </ul>

            {/* {Social Icons} */}
            <div className='hidden'>

            </div>
    </div>
  )
}

export default Navbar