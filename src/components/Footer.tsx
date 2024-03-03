import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import shorts from "../images/gotoShorts.png";
import shortsClicked from "../images/gotoShorts_c.png";
import search from "../images/search.png";
import searchClicked from "../images/search_c.png";
import main from "../images/homeB.png";
import mainClicked from "../images/homeB_c.png";
import community from "../images/communityB.png";
import communityClicked from "../images/communityB_c.png";
import profile from "../images/profileB.png";
import profileClicked from "../images/profileB_c.png";

const StyleFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 40%;
  height: 56px;
  flex-shrink: 0;
  z-index: 100;
  background: #ececec;
    left: 50%;
    transform: translateX(-50%);

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 3px;
  cursor: pointer;
`;

function Footer(): JSX.Element {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex === activeButton ? null : buttonIndex);
  };

  return (
    <StyleFooter id="footer">
      <Link to="/Shorts">
        <Button
          src={activeButton === 1 ? shortsClicked : shorts}
          onClick={() => handleClick(1)}
          alt="go to Shorts Page"
        />
      </Link>
      <Link to="/Search">
        <Button
          src={activeButton === 2 ? searchClicked : search}
          onClick={() => handleClick(2)}
          alt="go to Search"
        />
      </Link>
      <Link to="/MainPage">
        <Button
          src={activeButton === 3 ? mainClicked : main}
          onClick={() => handleClick(3)}
          alt="go to Main Page"
        />
      </Link>
      <Link to="/BrandCommunity">
        <Button
          src={activeButton === 4 ? communityClicked : community}
          onClick={() => handleClick(4)}
          alt="go to Community"
        />
      </Link>
      <Link to="/Profile">
        <Button
          src={activeButton === 5 ? profileClicked : profile}
          onClick={() => handleClick(5)}
          alt="go to Profile"
        />
      </Link>
    </StyleFooter>
  );
}

export default Footer;
