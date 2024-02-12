import React, { FC } from "react";
import styled from "styled-components";
import HorizontalScroll from "../components/mainpageUI/HorizontalScroll";
import TimerScroll from "../components/mainpageUI/TimerScroll";
import VerticalImageGrid from "../components/mainpageUI/VerticalImageGrid";

interface MainPageProps {}

const ContentContainer = styled.div`
  margin-top: 300px; /* Push all content down by 200px */
`;

const StyledTimerScroll = styled(TimerScroll)`
  
  z-index: 50;
`;

const StyledHorizontalScroll = styled(HorizontalScroll)`
  
  height: 90px;
`;

const MainPage: React.FC = () => {
  return (
    <ContentContainer>
      {/* Other content */}
      <StyledTimerScroll />
      <div>Partenrs</div>
      <StyledHorizontalScroll/>
      <div>style</div>
      <VerticalImageGrid/>
      {/* Other content */}
      </ContentContainer>
  );
};

export default MainPage;
