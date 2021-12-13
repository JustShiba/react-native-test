import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowBackComments = (props) => (
    <Svg
        width={14}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M.94 10.94a1.5 1.5 0 0 0 0 2.12l9.545 9.547a1.5 1.5 0 1 0 2.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 1 0-2.122-2.122L.94 10.94ZM3 10.5H2v3h1v-3Z"
            fill="#000"
        />
    </Svg>
)