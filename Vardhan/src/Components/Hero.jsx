import React from 'react'
import heroBg from '../assets/hero-bg.webp'

export default function Hero() {
  return (
    <>
    <div className='overflow-hidden'>

    <div className='w-screen h-screen overflow-hidden'>
        <img alt='bg-image' src={heroBg} 
         className='h-screen w-screen object-cover' 
        />
    </div>
    </div>
    </>
  )
}
