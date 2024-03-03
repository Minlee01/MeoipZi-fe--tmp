import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useHistory from React Router
import { bannerData } from "../../data/Banner_data";

interface Image {
  id: number;
  url: string;
}

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
  cursor: pointer; /* Add cursor pointer */
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

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images: string[] = bannerData.map((image: Image) => image.url);
  const navigate = useNavigate(); // Get history object from React Router

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 3 : prev - 3));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 3 ? 0 : prev + 3));
  };

  // Function to handle automatic sliding every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Function to handle click on image for navigation
  const handleImageClick = (index: number) => {
    // Navigate to the page with "/banner-n" where n is the index of the clicked image
    navigate(`/banner-${index + 1}`);
  };

  return (
    <SliderContainer>
      <SlideWrapper style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
        {images.map((image: string, index: number) => (
          <Slide
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            onClick={() => handleImageClick(index)} // Attach onClick handler to each image
          />
        ))}
      </SlideWrapper>
      <PrevButton onClick={prevSlide}>Prev</PrevButton>
      <NextButton onClick={nextSlide}>Next</NextButton>
    </SliderContainer>
  );
};

export default Slider;
