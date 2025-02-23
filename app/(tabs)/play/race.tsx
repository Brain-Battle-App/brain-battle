import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import { useFindAvailableGame } from '@/common/hooks/queries/useFindAvailableGame';
import { useCreateGame } from '@/common/hooks/mutations/useCreateGame';
import { useJoinGame } from '@/common/hooks/mutations/useJoinGame';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';
import { useUpdateGame } from '@/common/hooks/mutations/useUpdateGame';
import SATLogo from '@/components/Images/SATLogo';
import CloseButton from '@/components/Buttons/CloseButton';
import HeartIcon from '@/components/Icons/HeartIcon';
import CalculatorIcon from '@/components/Icons/CalculatorIcon';
import BookIcon from '@/components/Icons/BookIcon';
import PencilIcon from '@/components/Icons/PencilIcon';
import CheckCircleIcon from '@/components/Icons/CheckCircleIcon';
import SubjectButton from '@/components/Play/SubjectButton'; // Import the new component

const Race = () => {
  const {
    currentGame,
    setCurrentGame,
    testType,
    gameType,
    setGameType,
    subject,
    setSubject,
  } = usePlayContext();
  const { findAvailableGame } = useFindAvailableGame();
  const { createGame } = useCreateGame();
  const { joinGame } = useJoinGame();
  const { updateGame } = useUpdateGame();
  const { user } = useAuthContext();

  const handlePlay = async () => {
    try {
      const gameData = { testType, subject };
      const availableGame = await findAvailableGame(user!.userId, gameData);
      if (availableGame) {
        await joinGame(availableGame.id, user!);
        setCurrentGame(availableGame);
      } else {
        const newGame = await createGame(user!, gameData);
        setCurrentGame(newGame);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      router.navigate('/play/lobby');
    }
  };

  return (
    <SafeAreaView className='flex-col justify-center items-center w-full'>
      <SATLogo width={200} height={100} className='mt-6' />
      <View className='flex-row flex-wrap justify-start gap-2 w-[90%] mt-8'>
        <SubjectButton
          subject='math'
          testType={testType}
          currentSubject={subject}
          onPress={() => setSubject('math')}
          IconComponent={CalculatorIcon}
        />
        <SubjectButton
          testType={testType}
          subject='reading'
          currentSubject={subject}
          onPress={() => setSubject('reading')}
          IconComponent={BookIcon}
        />
        {/* <SubjectButton
          testType={testType}
          subject='English & Reading'
          currentSubject={subject}
          onPress={() => setSubject('English & Reading')}
          IconComponent={PencilIcon}
        /> */}
      </View>
      <View className='w-[90%] mt-8'>
        <Text className='text-xl'>Game playing type</Text>
      </View>
      <View className='flex-row w-[90%] justify-between mt-4'>
        <Pressable
          onPress={() => setGameType('multiplayer')}
          className='bg-white p-4 rounded-2xl w-[48%]'
        >
          <View className='flex-row justify-end'>
            <CheckCircleIcon
              className='mb-4'
              checked={gameType === 'multiplayer'}
            />
          </View>
          <Text className='text-2xl font-semibold'>Multiplayer</Text>
          <Text className='text-lg font-thin'>Play with a friend</Text>
        </Pressable>
        <Pressable
          onPress={() => setGameType('singleplayer')}
          className='bg-white p-4 rounded-2xl w-[48%]'
        >
          <View className='flex-row justify-end'>
            <CheckCircleIcon
              className='mb-4'
              checked={gameType === 'singleplayer'}
            />
          </View>
          <Text className='text-2xl font-semibold'>Singleplayer</Text>
          <Text className='text-lg font-thin'>Play with a bot</Text>
        </Pressable>
      </View>
      <Pressable className='bg-white p-4 rounded-2xl mt-8 w-[90%] flex-row justify-center items-center'>
        <Text className='text-primary text-2xl'>Invite a Friend</Text>
      </Pressable>
      <Pressable
        className='bg-primary p-4 rounded-2xl mt-8 w-[90%] flex-row justify-center items-center'
        onPress={handlePlay}
      >
        <Text className='text-white text-2xl'>Join Online Match</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Race;
