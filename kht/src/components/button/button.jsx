import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

const Button = ( props ) => {
    return (
        <Btn onClick={props.onClick}>{props.innerText}</Btn>
    );
};

export const Btn = styled.button`
  font-size: 1.2em;
  width: 35vw;
  height: 6vh;
  padding: 0 10px;
  border: none;
  background-color: ${color.Blue[8]};
  color: ${color.White};
  border-radius: 10px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: ${color.Blue[7]};
  }
  &:active {
    cursor: pointer;
    background-color: ${color.Blue[8]};
  }

  @media only screen and (max-width: ${breakpoints.medium}) {
    width: 510px;
  }
`;

export default Button;