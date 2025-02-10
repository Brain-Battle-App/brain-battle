import { View, Text, Pressable, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

import { ReactNode } from 'react';

interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export default function Header({ left, center, right }: HeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView className='w-[100%] flex justify-center items-center'>
      <View className='flex-row justify-between items-center w-[90%] my-4'>
        <View>{left}</View>
        <View>{center}</View>
        <View className='flex-row items-center gap-4'>{right}</View>
      </View>
    </SafeAreaView>
  );
}
