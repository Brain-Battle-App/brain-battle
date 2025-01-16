import React, { useEffect, useRef } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import icons from '@/constants/icons';
import images from '@/constants/images';

interface GameLoadingIndicatorProps {
  size: number; // Size of the indicator
  fullScreen?: boolean; // Whether the indicator should be fullscreen
}

const GameLoadingIndicator = ({
  size,
  fullScreen = false,
}: GameLoadingIndicatorProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create a continuous rotation animation for the white highlight
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000, // Adjust duration for speed
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue]);

  // Interpolate the rotation of the white piece
  const rotateInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const imageSource = fullScreen ? images.logo : icons.logo;

  return (
    <View className='relative items-center justify-center'>
      {/* Static Gradient Ring */}
      <Svg height={size} width={size}>
        <Defs>
          <LinearGradient id='staticGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <Stop offset='0%' stopColor='#55A2FF' stopOpacity='1' />
            <Stop offset='25%' stopColor='#FCB810' stopOpacity='1' />
            <Stop offset='50%' stopColor='#FF3A31' stopOpacity='1' />
            <Stop offset='75%' stopColor='#454D51' stopOpacity='1' />
            <Stop offset='100%' stopColor='#55A2FF' stopOpacity='1' />
          </LinearGradient>
        </Defs>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 20) / 2}
          stroke='url(#staticGradient)'
          strokeWidth={8}
          fill='none'
        />
      </Svg>

      {/* Moving White Highlight */}
      <Animated.View
        style={{
          position: 'absolute',
          width: size,
          height: size,
          transform: [{ rotate: rotateInterpolate }],
        }}
      >
        <Svg height={size} width={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={(size - 20) / 2}
            stroke='rgba(255, 255, 255, 0.7)' // Semi-transparent white
            strokeWidth={8}
            strokeDasharray='50 250' // Adjust for highlight length
            strokeLinecap='round'
            fill='none'
          />
        </Svg>
      </Animated.View>

      {/* Logo */}
      <View className='absolute inset-0 items-center justify-center'>
        <Image
          source={imageSource}
          className={`${!fullScreen ? 'w-32 h-32' : 'w-72 h-36'}`}
        />
      </View>
    </View>
  );
};

export default GameLoadingIndicator;
