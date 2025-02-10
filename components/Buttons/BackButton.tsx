import React from 'react';
import { Pressable, Text, View, StyleProp, ViewStyle } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BackButtonProps {
  onPress: () => void;
  title?: string;
  color?: string;
  size?: number;
  bgClassName?: string;
  textClassName?: string;
}

const BackButton = ({
  onPress,
  color = '#51B5FD',
  bgClassName = 'bg-white rounded-2xl p-3',
  textClassName = 'text-black font-semibold text-2xl',
  size = 32,
  title,
}: BackButtonProps) => {
  return (
    <View className='flex-row items-center gap-4'>
      <Pressable onPress={onPress} className={bgClassName}>
        <AntDesign name='left' size={size} color={color} />
      </Pressable>
      {title && <Text className={textClassName}>{title}</Text>}
    </View>
  );
};

export default BackButton;
