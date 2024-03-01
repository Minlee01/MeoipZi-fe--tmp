import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {bannerData} from '../../data/Banner_data';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; /* Adjust the maximum width as needed */
  margin: 0 auto;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Slide = styled.img`
  width: 33.333%; /* Display three images at a time */
  flex-shrink: 0;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
`;

const PrevButton = styled(SlideButton)`
  left: 0;
`;

const NextButton = styled(SlideButton)`
  right: 0;
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = bannerData.map(image => image.url);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? images.length - 3 : prev - 3));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === images.length - 3 ? 0 : prev + 3));
  };

  // Function to handle automatic sliding every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <SliderContainer>
      <SlideWrapper style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SlideWrapper>
      <PrevButton onClick={prevSlide}>Prev</PrevButton>
      <NextButton onClick={nextSlide}>Next</NextButton>
    </SliderContainer>
  );
};

export default Slider;
