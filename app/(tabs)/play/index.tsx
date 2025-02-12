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
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from '@/components/GradientText';

const Play = () => {
  const { user } = useAuthContext();
  const { setTestType, currentGame } = usePlayContext();
  const { username, rank } = user!;
  const router = useRouter();

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
      <View className='bg-white dark:bg-background-elevated-dark w-[90%] mt-4 rounded-2xl p-4'>
        <View className='flex-row justify-center items-center'>
          <Image
            resizeMode='contain'
            style={{
              width: moderateScale(80),
              height: moderateScale(80),
            }}
            source={images.user1}
          />
          <View className='ml-4'>
            <Text className='text-3xl dark:text-white'>{username}</Text>
            <Text className='text-xl dark:text-gray-300'>{rank}</Text>
            <View className='bg-gray-100 dark:bg-background-dark p-2 rounded-2xl mt-2'>
              <Text className='dark:text-white'>
                Record <Text className='font-bold'>43-20</Text>
              </Text>
            </View>
          </View>
        </View>
        <View className='flex-row flex-wrap justify-between mt-4 w-full  '>
          {scoreCards.map((card, index) => (
            <View key={index} className='w-[48%] mb-4'>
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
                  <Text className='dark:text-white text-center'>
                    {card.title}
                  </Text>
                  <GradientText
                    text={card.score}
                    colors={card.colors}
                    className='text-2xl font-bold'
                  />
                </View>
              </LinearGradient>
            </View>
          ))}
        </View>
      </View>
      <View className='flex-row justify-between items-center w-[90%] mt-4'>
        <Text className='text-2xl font-semibold dark:text-white'>
          {' '}
          Head to Head
        </Text>
      </View>
      <View className='flex-row gap-2 w-[90%]'>
        <Pressable
          className='flex-col justify-end items-center w-[48%] bg-white dark:bg-background-elevated-dark   rounded-3xl  p-4 mt-4'
          onPress={() => handleChooseTestType('SAT')}
        >
          <SATLogo />
          <View className='bg-primary px-6 py-2 rounded-2xl mt-8'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </Pressable>
        <Pressable
          className='flex-col justify-end items-center w-[48%] bg-white dark:bg-background-elevated-dark rounded-3xl  p-4 mt-4'
          onPress={() => handleChooseTestType('ACT')}
        >
          <ACTLogo />
          <View className='bg-primary px-6 py-2 rounded-2xl  mt-8'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Play;
