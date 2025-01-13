import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalculatorIcon = ({ width = 20, height = 20 }: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <Path
        d='M15.3627 8.34576L5.56386 18.145L3.3999 16.5993L13.5083 5.87305L15.3627 8.34576Z'
        fill='#FF9D49'
      />
      <Path
        d='M13.8178 6.18239L3.40025 16.5995L1.85449 14.4356L11.6538 4.63672L13.8178 6.18239Z'
        fill='#FFCC75'
      />
      <Path
        d='M20 3.70915L17.218 6.49121L14.7451 4.63662L18.1454 1.85449L20 3.70915Z'
        fill='#BD1515'
      />
      <Path
        d='M18.145 1.85421L15.0538 4.94537L13.5083 2.78164L16.2904 -0.000488281L18.145 1.85421Z'
        fill='#F2484B'
      />
      <Path
        d='M15.3628 8.34569L17.2178 6.49072L13.5085 2.7814L11.6535 4.63637L15.3628 8.34569Z'
        fill='#082947'
      />
      <Path
        d='M2.78205 19.0722L0 19.9994L0.927195 17.2173L2.47287 17.5265L2.78205 19.0722Z'
        fill='#082947'
      />
      <Path
        d='M1.85448 14.4355L0.927246 17.2176L2.7821 19.0725L5.5642 18.1452L1.85448 14.4355Z'
        fill='#F2EBD9'
      />
    </Svg>
  );
};

export default CalculatorIcon;
