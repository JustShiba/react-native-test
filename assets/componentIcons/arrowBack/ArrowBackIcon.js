import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowBackIcon = (props) => (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            d="M1.116 9.116a1.25 1.25 0 0 0 0 1.768l7.955 7.955a1.25 1.25 0 1 0 1.768-1.768L3.768 10l7.07-7.071A1.25 1.25 0 1 0 9.072 1.16L1.116 9.116ZM20 8.75H2v2.5h18v-2.5Z"
            fill="#FAFAFA"
        />
    </Svg>
);
