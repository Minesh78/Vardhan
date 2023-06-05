import React from 'react';
import Animationtext from './Animationtext';
import {motion, AnimatePresence} from 'framer-motion';
import Logo from '../assets/vvaa transparent.webp'

const Loader = () => {


  return (
    <>
<AnimatePresence>

<motion.div 
    initial={{opacity: 1}}
    animate={{opacity: 0}}
    transition={{duration: 1, 
                delay: 2,
                ease: [0, 0.71, 0.2, 1.01]
                }}
    className='fixed bg-[#904B55]  h-screen  w-screen z-50'></motion.div>




{/* <motion.div 
    initial={{left: 0}}
    animate={{left: "-110%"}}
    transition={{duration: 1.3, 
                delay: 2.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}
    className='fixed bg-[#913c49]  h-screen  w-screen z-10'></motion.div>

    <motion.div 
    initial={{right: 0}}
    animate={{right: "-110%" }}
    transition={{duration: 1.3, 
                delay: 2.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
    className='fixed bg-[#904b55] h-screen w-screen z-10'></motion.div> */}


    <motion.div 
        initial={{opacity: 1,scale: 0.7 ,}}
        animate={{opacity: 0, scale: 1 }}
        transition={{duration: 1.1, delay: 1.7, ease: "anticipate"}}
    className='fixed text-[#fecd9b] w-screen h-screen flex items-center justify-center z-50 text-4xl font-bold'>
    <div className='flex  flex-col justify-center items-center'>
    <img className='w-96 m-4' alt='logo' src={Logo}/>
    <Animationtext  text="Earth. Air. Light."/>

    </div>
    
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Loader