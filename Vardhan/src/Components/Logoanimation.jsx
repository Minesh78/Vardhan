import React from 'react'
import {motion} from 'framer-motion'
import img1 from '../assets/Logorev/Vvaalogo.png'
import img2 from '../assets/Logorev/eal.png'
import img3 from '../assets/Logorev/logoname.png'




export default function Logoanimation() {
    
        const container = {
            hidden:{ opacity:0 },
            visible:( i = 1 )=>( {
                opacity:1,
                transition: {staggerChildren:2, delayChildren: 1* i },
            }),
        }
    
        const child = {
            visible:{
                opacity: 1,
                y:0,
                transition:{
                    type:"spring",
                    damping: 12,
                    stiffness: 100,
                },
            },
    
            hidden:{
                opacity: 0,
                y: 20,
                transition:{
                    type:"spring",
                    damping: 12,
                    stiffness: 100,
                },
            },
        }
  return (
    <>
    <motion.div variants={container} initial='hidden' animate='visible' className='md:translate-y-[-200px] translate-y-[150px] translate-x-[10px]'>
    <motion.div variants={child} className='absolute' ><img alt="logo1" src={img1}></img></motion.div>
    <motion.div variants={child} className='absolute' ><img alt="logo2" src={img2}></img></motion.div>
    <motion.div variants={child} className='absolute' ><img alt="logo3" src={img3}></img></motion.div>

    </motion.div>

    </>
  )
}


