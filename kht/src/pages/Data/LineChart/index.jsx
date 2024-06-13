import React from "react";
import { styled } from "styled-components";
import LineChart from "./LineChart";
import useXY from './useXY';

const Chart = (props) => {
    const data = props.data;
    const [arr] = useXY(data);

    return (
        <div>
            <LineChart points={arr} data={data} />
        </div>
    )
}

export default Chart;