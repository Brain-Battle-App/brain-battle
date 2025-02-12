import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BackIconProps {
  width?: number;
  height?: number;
}

export default function BackIcon({ width = 24, height = 24 }: BackIconProps) {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M15 18L9 12L15 6'
        stroke='black'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
