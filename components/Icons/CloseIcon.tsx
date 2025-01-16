import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 16 16' fill='none'>
      <Path
        d='M15 1L1 15M1 1L15 15'
        stroke='#51B5FD'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default CloseIcon;
