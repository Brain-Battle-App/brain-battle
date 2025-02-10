import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { router, useRouter } from 'expo-router';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import images from '@/constants/images';
import { moderateScale } from '@/utils/Mertics';
import SATLogo from '@/components/Images/SATLogo';
import ACTLogo from '@/components/Images/ACTLogo';
import Header from '@/components/Header';

const Play = () => {
  const { user } = useAuthContext();
  const { setTestType, currentGame } = usePlayContext();
  const { username, rank } = user!;
  const router = useRouter();

  const handleChooseTestType = (testType: string) => {
    setTestType(testType);
    router.navigate('/play/race');
  };

  return (
    <SafeAreaView className='flex-1 justify-start items-center w-full'>
      <View className='bg-white w-[90%] mt-8 rounded-lg p-4'>
        <View className='flex-row justify-center items-center '>
          <Image
            resizeMode='contain'
            style={{
              width: moderateScale(80),
              height: moderateScale(80),
            }}
            source={images.user1}
          />
          <View className='ml-4'>
            <Text className='text-3xl'>{username}</Text>
            <Text className='text-xl'>{rank}</Text>
            <View className='bg-gray-100 p-2 rounded-lg mt-2'>
              <Text>Record 43-20</Text>
            </View>
          </View>
        </View>
        <View className='flex-row flex-wrap justify-between mt-4 w-full'>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT Overall</Text>
            <Text className='text-xl'>1140</Text>
          </View>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT - Math</Text>
            <Text className='text-xl'>1140</Text>
          </View>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT - English & Reading</Text>
            <Text className='text-xl'>1140</Text>
          </View>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT - Science</Text>
            <Text className='text-xl'>1140</Text>
          </View>
        </View>
      </View>
      <View className='flex-row justify-between items-center w-[90%] mt-4'>
        <Text className='text-2xl font-semibold'> Head to Head</Text>
      </View>
      <View className='flex-row gap-2 w-[90%]'>
        <Pressable
          className='flex-col justify-end items-center w-[48%] bg-white rounded-lg p-4 mt-4'
          onPress={() => handleChooseTestType('SAT')}
        >
          <SATLogo />
          <View className='bg-primary px-6 py-2 rounded-lg mt-8'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </Pressable>
        <Pressable
          className='flex-col justify-end items-center w-[48%] bg-white rounded-lg p-4 mt-4'
          onPress={() => handleChooseTestType('ACT')}
        >
          <ACTLogo />
          <View className='bg-primary px-6 py-2 rounded-lg mt-8'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </Pressable>
      </View>
      <View className='flex-row justify-between items-center w-[90%] mt-4'>
        <Text className='text-2xl font-semibold'> Play Games</Text>
      </View>
    </SafeAreaView>
  );
};

export default Play;
