import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../styles/theme";
import { breakpoints } from "../styles/device";

import NoResult from "../assets/icon/noResult";

function ResultPage() {
    const [ data, setData] = useState("adsf");

  return (
  <Background>
    <Center>
        {data ? (
            <>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Border></Border>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Border></Border>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Border></Border>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Border></Border>
            </>
        ) : (
            <>
                <NoResult></NoResult>
                <BoldText>유저를 찾을 수 없습니다</BoldText>
                <Button>메인 페이지로 이동하기</Button>
            </>
        )}
    </Center>
  </Background>
  );
}

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Center = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Div = styled.div`
    width: 50vw;
    height: 15vh;
    border-radius: 20px;
    background-color: ${color.Gray[1]};
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: ${breakpoints.small}) {
        width: 500px;
    }
`;

export const Image = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${color.Gray[3]};
    border-radius: 50%;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;

    @media only screen and (max-width: ${breakpoints.small}) {
        width: 300px;
    }
`;

export const Text = styled.div`
    font-size: 1em;
    font-weight: 400;
    color: ${color.Black};
    margin: 1vh 0;
`;

export const Border = styled.div`
    width: 50vw;
    height: 1px;
    background-color: ${color.Gray[2]};
    margin: 3vh 0;

    @media only screen and (max-width: ${breakpoints.small}) {
        width: 500px;
    }
`;

export const BoldText = styled.div`
    font-size: 2em;
    font-weight: 800;
    color: ${color.Gray[4]};
    margin: 5vh 0;
`;

export const Button = styled.button`
    width: 15vw;
    height: 7vh;
    background-color: ${color.Blue[8]};
    color: ${color.White};
    font-size: 1.1em;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    &:hover {
        cursor: pointer;
        background-color: ${color.Blue[7]};
    }
    &:active {
        cursor: pointer;
        background-color: ${color.Blue[8]};
    }
`;

export default ResultPage;
