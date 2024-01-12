import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
//import CommunityTab from "./CommunityTab";

interface LayoutProps {
  children: ReactNode;
}

const StyleWrap = styled.div`
  margin-top: 126px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 375px;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;

  background-color: white;
`;

const ContentWrapper = styled.div`
  
  flex: 1;
  overflow-y: scroll;
`;

function Layout(props: LayoutProps): JSX.Element {
    return (
      <div>
        <Header />
        
        <StyleWrap id="wrap">
         
          <ContentWrapper>
            <main>{props.children}</main>
          </ContentWrapper>
        </StyleWrap>
        <Footer />
      </div>
    );
  }
  
  export default Layout;
  