import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

import NoResult from "../../assets/icon/noResult";
import BackButton from "../../assets/icon/backButton";
import NextButton from "../../assets/icon/nextButton";

function ResultPage() {
    const [ data, setData] = useState("asdf");

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
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
                <Div>
                    <Image></Image>
                    <TextDiv>
                        <Text>이름 : ㅇㄱㅎ</Text>
                        <Text>아이디 : khtkhtkht</Text>
                        <Text>전화번호 : 01012345678</Text>
                    </TextDiv>
                </Div>
            </>
        ) : (
            <>
                <NoResult></NoResult>
                <BoldText>유저를 찾을 수 없습니다</BoldText>
                <Button>메인 페이지로 이동하기</Button>
            </>
        )}
    </Center>
    <ButtonDiv>
        <BackButton />
        <NextButton />
    </ButtonDiv>
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

export const Center = styled.div`
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Div = styled.div`
    width: 45vw;
    height: 13vh;
    border-radius: 20px;
    border: solid 1px ${color.Blue[10]};
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1.5vh 0;

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
    background-color: ${color.Gray[2]};
    border-radius: 50%;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30vw;

    @media only screen and (max-width: ${breakpoints.small}) {
        width: 300px;
    }
`;

export const Text = styled.div`
    font-size: 1em;
    font-weight: 400;
    color: ${color.Black};
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

export const ButtonDiv = styled.div`
    display: flex;
    gap: 5vw;
`

export default ResultPage;
