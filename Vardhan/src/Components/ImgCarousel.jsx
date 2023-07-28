import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import img1 from './Accordian/stgimg1.webp'
import img2 from './Accordian/stgimg2.webp'
import img3 from './Accordian/stgimg3.webp'
import img4 from './Accordian/stgimg4.webp'


const Imgcarousel = () => {

   
     

  return (
    <>
    <div className="h-screen">

   
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} emulateTouch={true} swipeable={true}>

        
      
                 <div>
                    <img src={img1} className="h-screen object-contain" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} className="h-screen object-contain" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img3} className="h-screen object-contain"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img4} className="h-screen object-contain"/>
                    <p className="legend">Legend 3</p>
                </div> 
            </Carousel>
            
    </div>
    </>
  )
}

export default Imgcarousel