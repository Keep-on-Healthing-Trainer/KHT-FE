import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../styles/theme";
import { breakpoints } from "../styles/device";

import Input from "../components/input/input";
import Button from "../components/button/button";

function SignupPage() {
  const onLogin = () => {
    window.location.assign("/login");
  };

  return (
    <Background>
      <LogoText>KH TRAINER</LogoText>
      <Div>
        <Input innerText="이름" name="text" />
        <Input innerText="아이디" name="text" />
        <Input innerText="전화번호" name="text" />
        <Input innerText="비밀번호" name="password" />
        <Input innerText="비밀번호 확인" name="password" />
      </Div>
      <Button innerText="회원가입" onClick={() => onLogin()} />
    </Background>
  );
}
  
export const Background = styled.div`
  width: 100%;
  height: 100vh;
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
  margin: 7vh 0;
`;

export default SignupPage;
