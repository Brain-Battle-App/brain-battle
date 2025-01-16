import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const CheckCircleOutlineIcon = ({ width = 14, height = 14 }: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <Rect
        x='0.5'
        y='0.499512'
        width='19'
        height='19'
        rx='9.5'
        fill='white'
        stroke='#EEEFF2'
      />
    </Svg>
  );
};

export default CheckCircleOutlineIcon;
