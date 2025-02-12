import React from 'react';
import Svg, { Path, Circle, Text, Defs, ClipPath } from 'react-native-svg';
import { View } from 'react-native';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
  count?: number;
}

const NotificationIcon = ({
  height = 25,
  width = 28,
  color = '#111719',
  count = 5,
}: IconProps) => {
  const bellPath =
    'M3.23698 10.8691C3.23702 4.95519 8.05875 0.166504 13.9998 0.166504C19.941 0.166504 24.7627 4.95523 24.7627 10.8692C24.7628 12.2449 24.8553 13.283 25.4896 14.2162C25.731 14.5662 26.1882 15.158 26.4927 15.6338C26.8338 16.1669 27.167 16.8097 27.2816 17.5588C27.6554 20.0025 25.9324 21.5847 24.2166 22.2937C18.173 24.7908 9.82672 24.7908 3.78311 22.2937C2.06725 21.5847 0.34432 20.0025 0.718072 17.5587C0.83263 16.8097 1.16587 16.1669 1.50695 15.6338C1.81148 15.1579 2.26875 14.5661 2.51012 14.2161C3.14434 13.2829 3.23686 12.2447 3.23698 10.8691Z';

  // Increased cutout size
  const cutoutPath = `
    M 0 -10
    H 28
    V 29
    H 0
    Z
    M 12 -14
    a 16 16 0 0 1 32 0
    a 16 16 0 0 1 -32 0
    Z
  `;

  return (
    <View style={{ width, height }}>
      <Svg
        width={width}
        height={height}
        viewBox='0 -10 28 39'
        style={{ transform: [{ scale: 1.2 }] }}
      >
        <Defs>
          <ClipPath id='cut-off-top-right'>
            <Path d={cutoutPath} />
          </ClipPath>
        </Defs>

        <Path
          d={bellPath}
          fill={color}
          clipPath={count > 0 ? 'url(#cut-off-top-right)' : undefined}
        />
        <Path
          d='M17.7035 27.7679C16.6323 28.4415 15.3583 28.8301 13.998 28.8301C12.6376 28.8301 11.3636 28.4415 10.2925 27.7679C9.34173 27.17 8.86636 26.871 9.03271 26.3741C9.19906 25.8771 9.85501 25.9327 11.1669 26.044C13.0432 26.2032 14.9528 26.2032 16.829 26.044C18.1409 25.9327 18.7968 25.8771 18.9632 26.3741C19.1295 26.871 18.6542 27.17 17.7035 27.7679Z'
          fill={color}
        />

        {count > 0 && (
          <>
            <Circle
              cx='22'
              cy='4'
              r='8'
              fill='#FF3A31'
              stroke='#181818'
              strokeWidth='1.5'
            />
            <Text
              x='22'
              y='5'
              fontSize='8'
              fontWeight='bold'
              fill='black'
              textAnchor='middle'
              alignmentBaseline='middle'
            >
              {count}
            </Text>
          </>
        )}
      </Svg>
    </View>
  );
};

export default NotificationIcon;
