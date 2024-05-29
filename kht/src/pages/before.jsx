import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../styles/theme";
import { breakpoints } from "../styles/device";

import phoneImage from "../assets/image/phoneImage.png";
import count from "../assets/image/count.png";
import topTen from "../assets/image/topTen.png";

import Arrow from "../assets/icon/arrow";
import Footer from "../components/footer/footer";

function BeforePage() {
  return (
    <>
      <BackgroundBlue>
        <DivTop>
          <div>
            <Title>함께 만드는 건강한</Title>
            <Title>라이프 스타일</Title>
            <LittleTitle>지금 시작하는 건강한 하루, KHT와 함께해요.</LittleTitle>
            <Button>
              <Arrow></Arrow>
              KHT 시작하기
            </Button>
          </div>
        </DivTop>
      </BackgroundBlue>
      <BackgroundWhite>
        <DivCenter>
          <div>
            <Service>측정 서비스</Service>
            <Title>신뢰할 수 있는</Title>
            <Title>측정 결과</Title>
            <LittleTitle>KHT 기기를 통한 정확한 측정을 경험해보세요.</LittleTitle>
            <TextTop>측정 기록 확인</TextTop>
            <TextBottom>신뢰할만한 측정 서비스</TextBottom>
          </div>
        </DivCenter>
      </BackgroundWhite>
      <BackgroundBlue>
        <DivBottom>
          <div>
            <Service>랭킹 서비스</Service>
            <Title>빠르게 확인하는</Title>
            <Title>TOP 10</Title>
            <LittleTitle>랭킹을 통해 서로 경쟁할 수 있어요.</LittleTitle>
            <TextTop>TOP 10</TextTop>
            <TextBottom>결과를 통한 랭킹 서비스</TextBottom>
          </div>
        </DivBottom>
      </BackgroundBlue>
      <Footer></Footer>
    </>
  );
}

export const BackgroundBlue = styled.div`
  width: 100%;
  height: 94vh;
  background-color: ${color.Blue[0]};

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.medium}) {
    height: 110vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    height: 110vh;
    width: 700px;
  }
`;

export const BackgroundWhite = styled.div`
  width: 100%;
  height: 94vh;
  background-color: ${color.White};

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.medium}) {
    height: 110vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    height: 110vh;
    width: 700px;
  }
`;

export const Title = styled.div`
  font-size: 2.5em;
  font-weight: bold;
`;

export const LittleTitle = styled.div`
  font-size: 1em;
  font-weight: medium;
  color: ${color.Gray[5]};
  margin: 5vh 0;
`;

export const DivTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10vw;

  width: 50vw;
  height: 80vh;

  background-image: url(${phoneImage});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 500px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    background-position: bottom;
    background-size: 300px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    align-items: flex-start;
    justify-content: center;
    background-position: bottom;
    background-size: 300px;
    width: 700px;
  }
`;

export const DivCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10vw;

  width: 50vw;
  height: 80vh;

  background-image: url(${count});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 410px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    background-position: bottom;
    background-size: 250px;
    height: 100vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    align-items: flex-start;
    justify-content: center;
    background-position: bottom;
    background-size: 250px;
    width: 700px;
  }
`;

export const DivBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10vw;

  width: 50vw;
  height: 94vh;

  background-image: url(${topTen});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 540px;

  @media only screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    background-position: bottom;
    background-size: 400px;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    align-items: flex-start;
    justify-content: center;
    background-position: bottom;
    background-size: 400px;
    width: 700px;
  }
`;

export const Service = styled.div`
  font-size: 1em;
  color: ${color.Blue[8]};
  font-weight: 900;
  padding: 5vh 0;
`;

export const TextTop = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  color: ${color.Black};
  background-color: ${color.Gray[2]};
  border-radius: 5px;
  padding: 1vh 1vw;
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TextBottom = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  color: ${color.Black};
  background-color: ${color.Gray[2]};
  border-radius: 5px;
  padding: 1vh 1vw;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.button`
  padding: 2vh 2vw;
  gap: 1vw;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${color.Blue[8]};
  border: none;
  color: ${color.White};
  font-size: 1.4em;
  font-weight: bold;

  border-radius: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${color.Blue[7]};
  }
  &:active {
    cursor: pointer;
    background-color: ${color.Blue[8]};
  }
`;

export default BeforePage;
