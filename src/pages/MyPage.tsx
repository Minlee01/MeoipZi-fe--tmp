import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Profile from '../components/MyPageUI/Profile';
import PButton from "../components/MyPageUI/PButton";

import likeClicked from "../images/likeClicked.png"
import likeNoClicked from "../images/likeNoClicked.png";
import postClicked from "../images/postClicked.png";
import postNoClicked from "../images/postNoClicked.png";

const PageStyle = styled.div`
  position: fixed;
  align-items: center;
`;

const ButtonLocation = styled.div``;

interface MyProps {
  children: ReactNode;
}

const MyPage: FC<MyProps> = (props) => {
  const navigate = useNavigate();

  // Define handleLikeClick to handle button click and navigation
  const handleLikeClick = (route: string) => {
    // Navigate to the specified route
    navigate(route);
  };

  return (
    <PageStyle>
      <Profile />
      <ButtonLocation>
        <PButton
          likeClickedSrc={likeClicked}
          likeNoClickedSrc={likeNoClicked}
          onClick={() => handleLikeClick("/likes")}
          route="/likes" // Specify the route prop here
        />
        <PButton
          likeClickedSrc={postClicked}
          likeNoClickedSrc={postNoClicked}
          onClick={() => handleLikeClick("/posts")}
          route="/posts" // Specify the route prop here
        />
      </ButtonLocation>
      <main>{props.children}</main>
    </PageStyle>
  );
}

export default MyPage;
