import React, { useState, useEffect } from 'react';
import Imgcarousel from './ImgCarousel';
import  {Accordion}  from './Accordian/Accordian';


const WindowWidthRenderer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  
  const mediumScreenWidth = 768;


  return (
    <>
     {windowWidth > mediumScreenWidth ? <Accordion/> : <Imgcarousel/>}
    </>
  );
};

export default WindowWidthRenderer;
