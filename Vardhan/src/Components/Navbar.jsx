import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'




const Navbar = () => {

  let [open,setOpen]=useState(false);

  return (
    <>
    
    <div  className=' w-full fixed top-0 right-0 z-10 bg-[#904B55]   '>
      <div className='md:flex items-center justify-between py-3 md:px-7 px-4'>
      <div className=' cursor-pointer flex  items-center  text-white'>
        <span className=' text-xl md:text-3xl mr-1 pt-2'>
        {/* Logo Placeholder */}
        </span>
        <NavLink to="/" className='text-white font-bold sm:text-2xl  text-l duration-500 drop-shadow-lg' onClick={()=>setOpen(false)}>V Vardhan Architects & Associates</NavLink>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='md:text-3xl text-2xl text-white absolute right-8 top-3 md:top-4 cursor-pointer md:hidden '>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul onClick={()=>setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-1  absolute md:static  md:z-auto z-[-1] left-0 w-full   md:w-auto md:pl-0 pl-9 backdrop-blur-sm md:backdrop-blur-0 bg-[#200b0e6e]  md:bg-transparent transition-all duration-500  ease-in ${open ? 'top-12 ':'top-[-350px] ' }`}>
        
            <li  className='md:ml-8 text-l md:my-0 my-7 '>
              <NavLink to="/about" className='text-white hover:text-gray-400 duration-500'>About</NavLink>
            </li>

            <li  className='md:ml-6 text-l md:my-0 my-7'>
              <NavLink to="/projects" className='text-white hover:text-gray-400 duration-500'>Projects</NavLink>
            </li>

            <li  className='md:ml-8 text-l md:my-0 my-7'>
              <NavLink to="/studiowork" className='text-white hover:text-gray-400 duration-500'>Studio Work</NavLink>
            </li>

            <li  className='md:ml-8 text-l md:my-0 my-7'>
              <NavLink to="/contact" className='text-white hover:text-gray-400  hover:scale-100 duration-500'>Contact</NavLink>
            </li>
        
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar