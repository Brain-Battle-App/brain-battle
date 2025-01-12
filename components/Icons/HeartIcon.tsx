import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HeartIcon = ({width=28, height=25}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 25"
      fill="none"
    >
      <Path
        d="M8 8.5C10.2186 11.2999 11.5364 12.5986 14 14.5C16.9891 12.0761 18.3173 10.7606 20 8.5"
        stroke="#FF2D72"
        strokeWidth="15.746"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default HeartIcon;