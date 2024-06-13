import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

import Chart from "./LineChart";

function DataPage() {
  const data = {
    "totalCounts": 200,
    "exerciseResponses": [
        {
            "id": 1,
            "count": 30,
            "exerciseDate": "04.06"
        },
        {
            "id": 2,
            "count": 70,
            "exerciseDate": "04.07"
        },
        {
            "id": 1,
            "count": 100,
            "exerciseDate": "04.08"
        }
    ]
}

  return (
    <Background>
        <Center>
            <Top>
                <Profile></Profile>
                <Div>
                  <TitleDiv>
                    <TextDiv>
                      <Title>이름</Title>
                      <Text>조현민</Text>
                    </TextDiv>
                    <TextDiv>
                      <Title>아이디</Title>
                      <Text>khtkhtkht</Text>
                    </TextDiv>
                    <TextDiv>
                      <Title>전화번호</Title>
                      <Text>01012345678</Text>
                    </TextDiv>
                  </TitleDiv>
                  <TitleDiv>
                    <TextDiv>
                      <Title>누적 횟수</Title>
                      <Text>1003회</Text>
                    </TextDiv>
                    <TextDiv>
                      <Title>랭킹</Title>
                      <Text>50등</Text>
                    </TextDiv>
                  </TitleDiv>
                </Div>
            </Top>
            <Chart data={data.exerciseResponses}></Chart>
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
  width: 55vw;
  height: 65vh;
  border-radius: 25px;
  border: solid 1px ${color.Gray[2]};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 50vw;
  height: 25vh;
  border-bottom: solid 1px ${color.Gray[2]};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Profile = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: ${color.Gray[2]};
`;

export const Title = styled.div`
  font-size: 1em;
  font-weight: 500;
  width: 5vw;
  height: 5vh;
  color: ${color.Gray[4]};
`

export const Text = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  height: 5vh;
  color: ${color.Black};
`

export const TitleDiv = styled.div`
  width: 15vw;
`

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
`

export default DataPage;