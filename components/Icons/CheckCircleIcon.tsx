import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface CheckCircleIconProps {
  checked: boolean;
  size?: number; // Size of the circle
  className?: string; // Optional TailwindCSS class for customization
  checkedClassName?: string; // Optional TailwindCSS class for customization when checked
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  className,
  checked,
  size = 32,
  checkedClassName = 'border border-primary bg-primary',
}) => {
  return (
    <View
      className={`items-center justify-center ${className} ${
        checked ? checkedClassName : ''
      } rounded-full`}
      style={{ width: size, height: size }}
    >
      {checked && (
        <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
          <Path
            d='M9 12l2 2 4-4'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </Svg>
      )}
    </View>
  );
};

export default CheckCircleIcon;
