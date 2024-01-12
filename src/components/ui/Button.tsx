import React from "react";
import styled from "styled-components";

interface ButtonProps {
    title?: string;
    onClick?: () => void;
}

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    border-width: 1px;
    border-color: black;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
`;

function Button({ title, onClick }: ButtonProps): JSX.Element {
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
