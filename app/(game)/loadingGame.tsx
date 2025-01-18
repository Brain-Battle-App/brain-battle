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
import { useFetchGameQuestions } from '@/common/hooks/queries/useFetchGameQuestions';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';
import { useUpdateGame } from '@/common/hooks/mutations/useUpdateGame';

const LoadingGame = () => {
  const { subject, testType, setQuestions, currentGame } = usePlayContext();
  const { fetchGameQuestions } = useFetchGameQuestions();
  const { updateGame } = useUpdateGame();
  const { db } = useAuthContext();

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const questions = await fetchGameQuestions(db, testType, subject); // Await the resolved value
        console.log('Questions:', questions); // Log the actual data
        setQuestions(questions); // Save the data to context or state

        const updatedGame = { ...currentGame, questions: [...questions] };
        // await updateGame(updatedGame); // Update the game with the new questions
        setTimeout(() => {
          router.navigate('/(game)/game');
        }, 3000);
      } catch (error) {
        console.error('Error fetching questions:', error);
        Alert.alert('Error', 'Failed to load questions.');
      }
    };

    loadQuestions(); // Call the async function
  }, [testType, subject]);

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
