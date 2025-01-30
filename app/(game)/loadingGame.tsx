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
        if (!currentGame?.id) {
          throw new Error('Game ID is required to update the document.');
        }

        // Fetch questions
        const questions = await fetchGameQuestions(db, testType, subject);
        console.log('Questions:', questions);
        setQuestions(questions);

        // Create the updated game object with a guaranteed ID
        const updatedGame = { ...currentGame, questions };

        // Update the game document in Firestore
        await updateGame(updatedGame);

        setTimeout(() => {
          router.navigate('/(game)/game');
        }, 3000);
      } catch (error) {
        console.error('Error fetching questions or updating game:', error);
        Alert.alert('Error', 'Failed to load questions or update the game.');
      }
    };

    loadQuestions();
  }, [testType, subject, currentGame]);

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
