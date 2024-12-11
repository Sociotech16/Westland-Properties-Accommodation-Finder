import React from 'react';
 import ImageSlider from './imageSlider';
 import background from './background.jpeg'
 import R from './R.jpeg'
 
 
 
 const Slide = () => { 
    const images = [
         background,
         R,
          background,
          R,
           background,
           R
        ]; 
        return ( 
        <div> <h1>Listing Preview</h1> 
        <ImageSlider images={images} /> 
        </div> 
        ); 
    }; 
    
export default Slide;