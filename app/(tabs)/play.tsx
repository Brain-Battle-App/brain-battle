import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import { useFindAvailableGame } from '@/common/hooks/queries/useFindAvailableGame';
import { useCreateGame } from '@/common/hooks/mutations/useCreateGame';
import { useJoinGame } from '@/common/hooks/mutations/useJoinGame';

const Play = () => {
  const [loading, setLoading] = useState(false);

  const { findAvailableGame } = useFindAvailableGame();
  const { createGame } = useCreateGame();
  const { joinGame } = useJoinGame();

  const handlePlay = async () => {
    setLoading(true);

    try {
      // Try to find an available game
      const availableGame = await findAvailableGame();

      if (availableGame) {
        // Join the found game
        await joinGame(availableGame.id, 'user-id'); // Replace 'user-id' with actual user ID
        Alert.alert('Joined Game', `You joined game: ${availableGame.id}`);
      } else {
        // Create a new game if no game is available
        const newGame = await createGame('user-id'); // Replace 'user-id' with actual user ID
        Alert.alert('Game Created', `You created a new game: ${newGame.id}`);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={handlePlay}
        disabled={loading}
        className="bg-blue-500 p-4 rounded-md"
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text className="text-white text-lg">Play</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Play;
