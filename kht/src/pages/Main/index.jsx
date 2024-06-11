import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

import Footer from "../../components/footer/footer";
import BackButton from "../../assets/icon/backButton";
import NextButton from "../../assets/icon/nextButton";

function MainPage() {
  return (
    <>
      <Background>
        <Top>
          <TopDiv>
            <TextDiv>
              <TopText>순위</TopText>
            </TextDiv>
            <TextDiv>
              <TopText>이름</TopText>
            </TextDiv>
            <TextDiv>
              <TopText>아이디</TopText>
            </TextDiv>
            <TextDiv>
              <TopText>누적 횟수</TopText>
            </TextDiv>
          </TopDiv>
        </Top>
        <Bottom>
          <BottomDiv>
            <Div>
              <TextDiv>
                <Rank>1</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>2</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>3</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>4</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>5</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>6</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>7</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>8</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>9</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>10</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>11</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>12</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>13</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>14</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>15</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>16</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>17</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>18</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>19</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <Div>
              <TextDiv>
                <Rank>20</Rank>
              </TextDiv>
              <TextDiv>
                <Profile></Profile>
                <Text>이기혁</Text>
              </TextDiv>
              <TextDiv>
                <Text>testtest</Text>
              </TextDiv>
              <TextDiv>
                <Text>7000</Text>
              </TextDiv>
            </Div>
            <ButtonDiv>
              <BackButton></BackButton>
              <NextButton></NextButton>
            </ButtonDiv>
          </BottomDiv>
        </Bottom>
      </Background>
      <Footer></Footer>
    </>
  );
}

export const Background = styled.div`
  width: 100%;
  height: 230vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 700px;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 6vh;
  top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: ${color.White};
`

export const TopDiv = styled.div`
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const TopText = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  color: ${color.Black};
`

export const Bottom = styled.div`
  width: 100%;
  height: 218vh;
  margin-top: 12vh;
  display: flex;
  justify-content: center;
`

export const BottomDiv = styled.div`
  width: 45vw;
  height: 218vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Div = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: solid 1px ${color.Gray[2]};
  display: flex;
  align-items: center;
`

export const Text = styled.div`
  font-size: 1em;
  font-weight: 500;
  color: ${color.Gray[5]};
  text-align: center;
`

export const Rank = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  color: ${color.Gray[2]};
  text-align: center;
`

export const TextDiv = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Profile = styled.div`
  width: 55px;
  height: 55px;
  background-color: ${color.Black};
  border-radius: 50%;
`

export const ButtonDiv = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  gap: 5vw;
`

export default MainPage;
