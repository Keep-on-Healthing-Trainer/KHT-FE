import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

import Logo from "../../assets/icon/logo";

const MainHeader = () => {
  return (
  <Background>
    <LogoDiv>
      <Logo></Logo>
      <LogoText>KH TRAINER</LogoText>
    </LogoDiv>
    <LogoDiv>
      <Button>검색하기</Button>
    </LogoDiv>
  </Background>
  );
}

export const Background = styled.div`
  width: 100%;
  height: 5.9vh;
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px ${color.Gray[3]};
  position: fixed;
  background-color: ${color.White};

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  color: ${color.Blue[8]};
  margin-left: 0.5vw;
`;

export const Button = styled.button`
  padding: 0.5vh 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${color.White};
  border-radius: 10px;

  color: ${color.Gray[5]};
  font-weight: 600;
  font-size: 1.3em;

  &:hover {
    cursor: pointer;
    background-color: ${color.Gray[2]};
  }
  &:active {
    background-color: ${color.White};
    cursor: pointer;
  }
`;

export default MainHeader;
