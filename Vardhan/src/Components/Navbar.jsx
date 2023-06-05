import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = () => {

  let [open,setOpen]=useState(false);

  return (
    <>
    
    <div className=' w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between py-3 md:px-7 px-4'>
      <div className='  text-2xl cursor-pointer flex  items-center  text-white'>
        <span className=' text-xl md:text-3xl mr-1 pt-2'>
        {/* Logo Placeholder */}
        </span>
        <NavLink to="/" className='text-white hover:text-[#806e71] duration-500'>V Vardhan Architects & Associates</NavLink>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-8 top-4 cursor-pointer md:hidden '>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-9 backdrop-blur-sm md:backdrop-blur-0 transition-all duration-500  ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        
            <li  className='md:ml-8 text-l md:my-0 my-7'>
              <NavLink to="/about" className='text-white hover:text-gray-400 duration-500'>ABOUT</NavLink>
            </li>

            <li  className='md:ml-8 text-l md:my-0 my-7'>
              <NavLink to="/projects" className='text-white hover:text-gray-400 duration-500'>PROJECTS</NavLink>
            </li>

            <li  className='md:ml-8 text-l md:my-0 my-7'>
              <NavLink to="/studiowork" className='text-white hover:text-gray-400 duration-500'>STUDIO WORK</NavLink>
            </li>

            <li  className='md:ml-8 text-l md:my-0 my-7'>
              <NavLink to="/contact" className='text-white hover:text-gray-400  hover:scale-100 duration-500'>CONTACT</NavLink>
            </li>
        
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar