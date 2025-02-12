import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ChevronRightProps {
  width?: number;
  height?: number;
}

export default function ChevronRight({
  width = 24,
  height = 24,
}: ChevronRightProps) {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M9 18L15 12L9 6'
        stroke='#111719'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
