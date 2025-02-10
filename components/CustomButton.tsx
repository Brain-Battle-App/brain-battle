import { Pressable, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import icons from '@/constants/icons';

import Icon from '@/components/Icon';

type Icon = keyof typeof icons;

interface CustomButtonProps {
  title: string;
  fontFamily?: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  iconSize?: number;
  iconName?: string;
  iconColor?: string;
  bgColor?: string;
  customIcon?: Icon;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  fontFamily,
  textStyles,
  isLoading,
  customIcon,
  bgColor,
  iconSize,
  iconName,
  iconColor,
}: CustomButtonProps) => {
  return (
    <Pressable
      className={`flex flex-row bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
      ${isLoading ? 'opacity-50' : ''}`}
      // activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      {iconName && (
        <AntDesign name={iconName as any} size={iconSize} color={iconColor} />
      )}
      {customIcon && <Icon name={customIcon} />}
      <Text className={`text-lg ${textStyles}`}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
