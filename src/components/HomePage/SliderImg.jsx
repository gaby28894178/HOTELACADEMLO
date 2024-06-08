import React, { useState } from 'react';
import './style/Slider.css';

const SliderImg = ({ hotel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === hotel.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button className="carousel-btn prev-btn slider-btn-prev" onClick={prevSlide}>&lt;</button>
      <div className="slider-interior">
        <div className="slider-movible" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {hotel?.images.map((imgInfo) => (
            <div key={imgInfo.id} className="slider-img-container">
              <img className="slider-img" src={imgInfo.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn next-btn slider-btn-nex" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default SliderImg;
