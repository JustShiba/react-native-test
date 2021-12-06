import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

export const EditPostIcon = (props) => (
    <Svg width={16} height={4} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Circle cx={2} cy={2} r={2} fill="#000" />
        <Circle cx={8} cy={2} r={2} fill="#000" />
        <Circle cx={14} cy={2} r={2} fill="#000" />
    </Svg>
);
