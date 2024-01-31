import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HorizontalScroll from "../components/mainpageUI/HorizontalScroll";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
    const navigate = useNavigate();
  
    return (
      <HorizontalScroll>
        
      </HorizontalScroll>
    );
  };

export default MainPage;