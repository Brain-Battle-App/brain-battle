import Constants from 'expo-constants';

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import PlayerCard from '@/components/Play/PlayerCard';
import GameLoadingIndicator from '@/components/Play/GameLoadingIndicator';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import { useUpdateReadyState } from '@/common/hooks/mutations/useUpdateReadyState';
import { useUserContext } from '@/common/hooks/context/useUserContext';
import clsx from 'clsx';

const Lobby = () => {
  const { currentGame, subject, testType } = usePlayContext();
  const { updateReadyState } = useUpdateReadyState();
  const { user } = useUserContext();

  useEffect(() => {
    console.log('Current game updated in lobby:', currentGame);

    // Log device information
    console.log('Device Info:', {
      isDevice: Constants.isDevice, // true for physical devices
      deviceName: Constants.deviceName, // Name of the device/emulator
      appOwnership: Constants.appOwnership, // 'expo' (Expo Go) or 'standalone'
      platform: Constants.platform, // Platform-specific info
    });
  }, [currentGame]);

  const gameStatus = currentGame?.status || 'searching';
  const players = currentGame?.players || [];

  console.log('game status', gameStatus);

  const userPlayer = players.find((player) => player.userId === user?.userId);
  const opponentPlayer = players.find(
    (player) => player.userId !== user?.userId
  );

  return (
    <SafeAreaView className='flex-col justify-between items-center w-full h-full'>
      <Text className='text-3xl font-bold mb-4'>Race</Text>

      <View className='flex-row justify-center items-center relative mt-4'>
        <View className='transform rotate-[-12deg]'>
          <PlayerCard
            name='You'
            score={userPlayer?.totalScore || 0}
            isReady={userPlayer?.ready || false}
            bgColor='bg-blue-500'
          />
        </View>
        <View className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md absolute z-10 bottom-2'>
          <Text className='text-black font-bold'>VS</Text>
        </View>
        <View className='transform rotate-[12deg]'>
          <PlayerCard
            name='Opponent'
            score={opponentPlayer?.totalScore || 0}
            isReady={opponentPlayer?.ready || false}
            bgColor='bg-black'
          />
        </View>
      </View>

      {gameStatus === 'searching' && (
        <View className='mt-12'>
          <GameLoadingIndicator size={200} />
          <Text className='text-2xl mt-4'>Searching for opponent...</Text>
        </View>
      )}
      {gameStatus === 'lobby' && (
        <View className='flex-col justify-center items-center p-4 mt-12'>
          <Text className='text-2xl'>
            {testType} - {subject}
          </Text>
          <Text>
            Read the passage before the text disappears then finish the 5
            questions as fast as you can. Your score will be based on a your
            accuracy
          </Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={userPlayer?.ready || gameStatus !== 'lobby'}
        className={`p-4 rounded-2xl mt-8 w-[90%] flex-row justify-center items-center ${
          userPlayer?.ready || gameStatus !== 'lobby'
            ? 'bg-gray-400'
            : 'bg-primary'
        }`}
        onPress={() => updateReadyState(currentGame!.id, user!.userId, true)}
      >
        <Text
          className={`text-2xl ${
            userPlayer?.ready || gameStatus !== 'lobby'
              ? 'text-gray-600'
              : 'text-white'
          }`}
        >
          {!userPlayer?.ready ? 'Ready Up!' : 'Waiting for opponent'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Lobby;
