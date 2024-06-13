import React from "react";
import { styled } from "styled-components";

import useLine from './useLine';
import { breakpoints } from "../../../styles/device";
import { color } from "../../../styles/theme";

const LineChart = ({ points, data }) => {
    const [lines] = useLine(points);

    return (
        <Box>
            <svg>
                {lines.map(({ x1, x2, y1, y2 }, index) => (
                    <GraphLine x1={x1} x2={x2} y1={y1} y2={y2} key={index} stroke={color.Blue[6]} strokeWidth="1" />
                ))}
                {points.map(({ x, y }, index) => {
                    return(
                    <>
                        <GraphCircle cx={x} cy={y} r="1" key={index}></GraphCircle>
                        <Text x={x} y={100} key={index+'00'}>
                        {data[index].exerciseDate}
                        </Text>
                    </>
                    );
                })}
            </svg>
        </Box>
    );
}

const Box = styled.div`
    width: 700px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GraphLine = styled.line`
  stroke: ${color.Blue[10]};
  stroke-width: 1;
`;

const GraphCircle = styled.circle`
  fill: ${color.Blue[6]};
`;

const Text = styled.text`
  font-size: 0.9em;
`;


export default LineChart;