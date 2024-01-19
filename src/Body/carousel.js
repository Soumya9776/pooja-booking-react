import React, { useState, useEffect } from 'react';
import grahaShantiImage from '../graha-shanti.png';
import gruhaPraveshImage from '../gruhapravesh-puja.png';
import marriageImage from '../marriage-pic.png'
import namkaranImage from '../namkaran-puja.png'
import sankrantiImage from '../nakshatra-puja.png'
import "./carousel.css"
// Import other images similarly

const Carousel = () => {
  const photos = [
    grahaShantiImage,
    gruhaPraveshImage,
    marriageImage,
    namkaranImage,
    sankrantiImage
    // Add other imported images here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="carousel-container">
        <div className='image-container'>
      <img src={photos[currentIndex]} alt={` ${currentIndex + 1}`} className='carousel-image' />
      </div>
    </div>
  );
};

export default Carousel;

