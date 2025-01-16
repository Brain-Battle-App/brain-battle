import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import GameLoadingIndicator from '@/components/Play/GameLoadingIndicator';

const LoadingGame = () => {
  useEffect(() => {
    setTimeout(() => {
      router.navigate('/(game)/game');
    }, 3000);
  }, []);

  return (
    <SafeAreaView className='flex-col justify-center items-center h-full'>
      <GameLoadingIndicator fullScreen size={400} />
      <Text className='text-4xl font-semibold px-4 text-center mt-24'>
        Preparing the game for you...
      </Text>
    </SafeAreaView>
  );
};

export default LoadingGame;
