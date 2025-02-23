import {
  View,
  Pressable,
  Text,
  Image,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/common/hooks/useTheme';
import { ThemedView, ThemedText } from './Themed';

import { ReactNode } from 'react';

interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({ left, title, right, style }) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <SafeAreaView
      className='w-full flex justify-center items-center bg-background dark:bg-background-dark'
      style={style}
    >
      <View className='flex-row justify-between items-center w-[90%] my-4'>
        <View className='flex-row items-center gap-4'>
          {left}
          <Text className='font-clashsemibold text-xl text-text dark:text-white'>
            {title}
          </Text>
        </View>
        <View className='flex-row items-center gap-4'>{right}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
