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
    <SafeAreaView>
      <GameLoadingIndicator size={200} />
      <Text className='text-2xl mt-4'>Preparing the game for you</Text>
    </SafeAreaView>
  );
};

export default LoadingGame;
