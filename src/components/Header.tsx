import React from "react";
import styled from "styled-components";

const StyleHeader = styled.div`
    position: fixed;
    top:0;
    width: 375px;
    height: 86px;
    flex-shrink: 0;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);

    background: #ECECEC;
`;

function Header(): JSX.Element {
    return(
        <StyleHeader id = "header">
            <h2>header</h2>
        </StyleHeader>
    );
}

export default Header;