import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

import SearchIcon from "../../assets/icon/search";

const SearchInput = ( props ) => {
    return (
        <Div>
            <InputText type="text" placeholder="찾고싶은 유저를 입력하세요."/>
            <SearchIcon />
        </Div>
    );
};

export const Div = styled.div`
    width: 40vw;
    height: 6vh;
    border: solid 1px ${color.Blue[10]};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 50px;
    box-shadow: 5px 5px 5px ${color.Gray[2]};
`;

export const InputText = styled.input`
    width: 35vw;
    height: 5vh;
    font-size: 1em;
    border: none;
    padding: 0 10px;
    border-radius: 50px;
    color: ${color.Blue[10]};

    &:focus {
        outline: none;
    }

    &::placeholder{
		color: ${color.Blue[10]};
	}

    @media only screen and (max-width: ${breakpoints.medium}) {
        width: 500px;
    }
`;

export default SearchInput;