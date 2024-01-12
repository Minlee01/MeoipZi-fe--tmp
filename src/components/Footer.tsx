import React from "react";
import styled from "styled-components";

const StyleFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 56px;
    flex-shrink: 0;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);

    background: #ECECEC;
`;

function Footer(): JSX.Element {
    return(
        <StyleFooter id = "header">
            <h2>footer</h2>
        </StyleFooter>
    );
}

export default Footer;