import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TestImg1 from "../../images/test.png";
import TestImg2 from "../../images/test2.png";
import TestImg3 from "../../images/test3.png";

const images = [TestImg1, TestImg2, TestImg3];

const TimerScrollContainer = styled.div`
  width: 100%; /* Set the container width to 100% */
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Ensure all images are in a single line */
`;

const Image = styled.img`
  margin: 2px;
  width: 55vh;
  height: 190px;
`;

function TimerScroll() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimerScrollContainer>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{
            display: index === currentImageIndex ? "inline-block" : "none",
          }}
        />
      ))}
    </TimerScrollContainer>
  );
}

export default TimerScroll;
