import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  lives?: number;
}

const HeartIcon = ({ width = 28, height = 25, lives = 0 }: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 28 25' fill='none'>
      <Path
        d='M8 8.5C10.2186 11.2999 11.5364 12.5986 14 14.5C16.9891 12.0761 18.3173 10.7606 20 8.5'
        stroke='#FF2D72'
        strokeWidth='15.746'
        strokeLinecap='round'
      />
      <Text
        x='14'
        y='13'
        fontSize='10'
        fontWeight='bold'
        fill='black'
        textAnchor='middle'
        alignmentBaseline='middle'
      >
        {lives}
      </Text>
    </Svg>
  );
};

export default HeartIcon;
