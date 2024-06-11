import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";
import { breakpoints } from "../../styles/device";

const Input = ( props ) => {
    return (
        <Div>
            <Text>{props.innerText}</Text>
            <InputText type={props.name} />
        </Div>
    );
};

export const Div = styled.div`
    margin: 3vh 5vw;
`;

export const Text = styled.div`
    font-size: 0.9em;
    font-weight: 500;
`;

export const InputText = styled.input`
    width: 34vw;
    height: 6vh;
    font-size: 1em;
    border: none;
    background-color: ${color.Gray[1]};
    border-radius: 10px;
    padding: 0 10px;
    font-weight: 500;

    &:focus {
        border: none;
        outline: none;
    }

    @media only screen and (max-width: ${breakpoints.medium}) {
        width: 500px;
    }
`;

export default Input;