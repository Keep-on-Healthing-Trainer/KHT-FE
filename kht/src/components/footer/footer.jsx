import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

import Apple from "../../assets/icon/apple";
import Android from "../../assets/icon/android";

const Footer = () => {
    return (
      <Background>
        <div>
          <Text>이메일 : NoNamed@dsm.hs.kr</Text>
          <Text>주소 : 대전광역시 유성구 가정북로 76</Text>
        </div>
        <div>
          <Text>KHT 앱 다운로드</Text>
          <Div>
            <Button>
              <Apple/>
              <InnerText>App Store</InnerText>
            </Button>
            <Button>
              <Android/>
              <InnerText>Google Play</InnerText>
            </Button>
          </Div>
        </div>
      </Background>
    );
  };

export const Background = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: ${breakpoints.medium}) {
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.div`
  font-size: 1em;
  font-weight: 400;
  color: ${color.Gray[4]};
  margin: 3vh 0;
`;

export const Div = styled.div`
  display: flex;
  gap: 3vw;
  margin: 3vh 0;
`;

export const Button = styled.button`
  padding: 0.7vh 1.5vw;
  background-color: ${color.Blue[8]};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5vw;

  &:hover {
    cursor: pointer;
    background-color: ${color.Blue[7]};
  }
  &:active {
    cursor: pointer;
    background-color: ${color.Blue[8]};
  }
`;

export const InnerText = styled.div`
  color: ${color.White};
  font-size: 1.1em;
  font-weight: 500;
`;

export default Footer;