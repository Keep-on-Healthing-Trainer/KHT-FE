import React from "react";
import { styled } from "styled-components";

import useLine from './useLine';
import { breakpoints } from "../../../styles/device";
import { color } from "../../../styles/theme";
import { Background } from "..";

const LineChart = ({ points, data }) => {
    const [lines] = useLine(points);

    return (
        <Box>
            <Svg viewBox="0 0 700 350">
                {lines.map(({ x1, x2, y1, y2 }, index) => (
                    <GraphLine x1={x1} x2={x2} y1={y1} y2={y2} stroke={color.Blue[6]} strokeWidth="1" />
                ))}
                {points.map(({ x, y }, index) => {
                    return(
                    <>
                        <GraphCircle cx={x} cy={y} r="1"></GraphCircle>
                        <Text x={x} y={320}>
                        {data[index].exerciseDate}
                        </Text>
                    </>
                    );
                })}
            </Svg>
        </Box>
    );
}

const Box = styled.div`
    width: 700px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
`;

const Svg = styled.svg`
    width: 100%;
    height: 100%;
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