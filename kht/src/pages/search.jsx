import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../styles/theme";
import { breakpoints } from "../styles/device";

import SearchInput from "../components/input/search";
import BigLogo from "../assets/icon/bigLogo";

function SearchPage() {
  return (
  <Background>
    <Tab>
      <Div>
        <BigLogo />
        <LogoText>KH TRAINER</LogoText>
      </Div>
      <SearchInput />
    </Tab>
  </Background>
  );
}

export const Background = styled.div`
  width: 100%;
  height: 94vh;
  background-color: ${color.White};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.medium}) {
    height: 110vh;
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    height: 110vh;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  margin-bottom: 10vh;
`;

export const Tab = styled.div`
  height: 50vh;
`;

export default SearchPage;
