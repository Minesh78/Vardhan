import React from 'react'
import {motion} from 'framer-motion'
import img1 from '../assets/StaggeringImages/stgimg1.webp'
import img2 from '../assets/StaggeringImages/stgimg2.webp'
import img3 from '../assets/StaggeringImages/stgimg3.webp'

export default function StaggerImg() {
  return (
    <>
        <div className=' my-16 md:m-16 flex  md:flex-row flex-col items-center justify-center  md:gap-5' >
        <div className='md:w-[30%] relative overflow-hidden p-8 '>
            <motion.div 
                initial={{left: 0}}
                whileInView={{left: "100%"}}
                transition={{duration: 2, delay: 0.9,ease: [0, 0.71, 0.2, 1.01]}}
                viewport={{once: true}}
            className='absolute top-0 left-0 bg-white w-[100%] h-[100%]'></motion.div>
            <img className='w-[100%] h-[100%] object-cover' src={img1} alt="Staggering Images" />
        </div>

        <div className='md:w-[40%] relative overflow-hidden p-8  '>
            <motion.div 
                initial={{left: 0}}
                whileInView={{left: "100%"}}
                transition={{duration: 2, delay:1.6,ease: [0, 0.71, 0.2, 1.01]}}
                viewport={{once: true}}
            className='absolute top-0 left-0 bg-white w-[100%] h-[100%]'></motion.div>
            <img className='w-[100%] h-[100%] object-cover' src={img2} alt="Staggering Images" />
        </div>

        <div className='md:w-[30%] relative overflow-hidden p-8 '>
            <motion.div 
                initial={{left: 0}}
                whileInView={{left: "100%"}}
                transition={{duration: 2, delay: 2.4,ease: [0, 0.71, 0.2, 1.01]}}
                viewport={{once: true}}
            className='absolute top-0 left-0 bg-white w-[100%] h-[100%]'></motion.div>
            <img className='w-[100%] h-[100%] object-cover' src={img3} alt="Staggering Images" />
        </div>
        </div>
    </>
  )
}
