import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { router, useRouter } from 'expo-router';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import images from '@/constants/images';
import { moderateScale } from '@/utils/Mertics';
import SATLogo from '@/components/Images/SATLogo';
import ACTLogo from '@/components/Images/ACTLogo';
import Header from '@/components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from '@/components/GradientText';
import ProfileImage from '@/components/ProfileImage';
import { useColorScheme } from 'nativewind';

const Play = () => {
  const { user } = useAuthContext();
  const { setTestType, currentGame } = usePlayContext();

  const username = user?.username ?? 'Guest';
  const rank = user?.rank ?? 'Unranked';

  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const handleChooseTestType = (testType: string) => {
    setTestType(testType);
    router.navigate('/play/race');
  };

  const scoreCards = [
    {
      title: 'ACT Overall',
      score: 1140,
      colors: ['#FFD1F6', '#59115A'],
      borderColors: ['#FFD1F6', '#59115A'],
    },
    {
      title: 'ACT - Math',
      score: 1204,
      colors: ['#7CD2FF', '#0066FF'],
      borderColors: ['#7CD2FF', '#0066FF'],
    },
    {
      title: 'ACT - English & Reading',
      score: 2024,
      colors: ['#FFE27C', '#FF9900'],
      borderColors: ['#FFE27C', '#FF9900'],
    },
    {
      title: 'ACT - Science',
      score: 4012,
      colors: ['#7CFFA3', '#00FF38'],
      borderColors: ['#7CFFA3', '#00FF38'],
    },
  ];

  return (
    <SafeAreaView className='flex-1 justify-start items-center w-full dark:bg-background-dark'>
      <View className='bg-white dark:bg-background-elevated-dark w-[95%] mt-4 rounded-2xl p-4'>
        <View className='flex-row justify-center items-center'>
          <ProfileImage size={100} />
          <View className='ml-4'>
            <Text className='text-3xl dark:text-white'>{username}</Text>
            <Text className='text-xl dark:text-gray-300'>{rank}</Text>
            <View className='bg-gray-100 dark:bg-background-dark p-2 rounded-2xl mt-2'>
              <Text className='dark:text-white px-2 '>
                Record <Text className='font-bold'>43-20</Text>
              </Text>
            </View>
          </View>
        </View>
        <View className='flex-row flex-wrap justify-between mt-8 w-full  '>
          {scoreCards.map((card, index) => (
            <View key={index} className='w-[50%] px-2 mb-4'>
              <LinearGradient
                colors={card.borderColors as [string, string]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 12,
                  padding: 1.5,
                  height: moderateScale(85),
                }}
              >
                <View className='bg-white dark:bg-background-elevated-dark rounded-xl flex-1 p-4 justify-between items-center'>
                  <Text className='dark:text-white text-center text-sm font-semibold'>
                    {card.title}
                  </Text>
                  <GradientText
                    text={card.score}
                    colors={card.colors}
                    className='text-3xl font-bold'
                  />
                </View>
              </LinearGradient>
            </View>
          ))}
        </View>
      </View>
      <View className='flex-row justify-between items-center w-[95%] mt-4'>
        <Text className='text-2xl font-semibold dark:text-white'>
          {' '}
          Head to Head
        </Text>
      </View>
      <View className='flex-row gap-2 w-[95%]'>
        <Pressable
          className='flex-col justify-end items-center w-[48%] bg-white dark:bg-background-elevated-dark dark:border dark:border-white  rounded-3xl  p-4 mt-4'
          onPress={() => handleChooseTestType('SAT')}
        >
          <SATLogo color={colorScheme === 'dark' ? 'white' : 'black'} />
          <View className='bg-primary px-6 py-2 rounded-2xl mt-8'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </Pressable>
        <Pressable
          className='flex-col justify-end items-center w-[48%] bg-white dark:bg-background-elevated-dark dark:border dark:border-white rounded-3xl  p-4 mt-4'
          onPress={() => handleChooseTestType('ACT')}
        >
          <ACTLogo color={colorScheme === 'dark' ? 'white' : 'black'} />
          <View className='bg-primary px-6 py-2 rounded-2xl  mt-8'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Play;
