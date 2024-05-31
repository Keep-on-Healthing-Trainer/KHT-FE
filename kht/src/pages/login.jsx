import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../styles/theme";
import { breakpoints } from "../styles/device";

import Input from "../components/input/input";
import Button from "../components/button/button";

import BigLogo from "../assets/icon/bigLogo";

function LoginPage() {
  const onSignup = () => {
    window.location.assign("/main");
  };

  return (
    <Background>
      <BigLogo />
      <LogoText>KH TRAINER</LogoText>
      <Div>
        <Input innerText="아이디" name="text" />
        <Input innerText="비밀번호" name="password" />
      </Div>
      <Button innerText="로그인" onClick={() => onSignup()} />
    </Background>
  );
}

export const Background = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const LogoText = styled.div`
  font-size: 2.4em;
  font-weight: bold;
  color: ${color.Blue[8]};
  font-family: 'Roboto', sans-serif;
`;

export const Div = styled.div`
  margin: 10vh 0;
`;

export default LoginPage;
