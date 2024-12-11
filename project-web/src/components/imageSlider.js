import React, { useState, useEffect } from 'react';
import './imageSlider.css'; // Import your CSS file



function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [images]);



  return (
    <div className = "container">
    <div className="image-slider">
     
      <div className="image-container">
        <img src={images[currentIndex]} alt="slider-image" />
      </div>
     
    </div>
 <button className="slider-btn prev" onClick={handlePrev}>
        Previous
      </button>
 <button className="slider-btn next" onClick={handleNext}>
        Next
      </button>

    </div>
  );
}

export default ImageSlider;
