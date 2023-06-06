import React from 'react'

import img2 from '../assets/StaggeringImages/stgimg2.webp'
import img3 from '../assets/StaggeringImages/stgimg3.webp'


export default function Mainimg() {
  return (
    <>
    <section>
    <div>
        <img alt='main1' src={img2}/>
    </div>
    <div className='w-scren bg-black flex items-center justify-center'>
        <img alt='main2' src={img3} className='h-screen'/>
    </div>
    </section>

    </>
  )
}
