import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { router } from 'expo-router';
import PlayerCard from '@/components/Play/PlayerCard';
import GameLoadingIndicator from '@/components/Play/GameLoadingIndicator';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import { useUpdateReadyState } from '@/common/hooks/mutations/useUpdateReadyState';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';

const Lobby = () => {
  const { currentGame, subject, testType, opponentUser } = usePlayContext();
  const { updateReadyState } = useUpdateReadyState();
  const { user } = useAuthContext();

  const [countdown, setCountdown] = useState<number | null>(null);

  const gameStatus = currentGame?.status || 'searching';
  const players = currentGame?.players || [];

  useEffect(() => {
    const bothPlayersReady = currentGame?.players.every(
      (player) => player.ready
    );

    if (bothPlayersReady && gameStatus === 'lobby') {
      setCountdown(3); // Start countdown when both players are ready
    }
  }, [currentGame, gameStatus]);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearInterval(interval);
    } else if (countdown === 0) {
      console.log('Countdown finished, starting game...');
      router.navigate('/play/loadingGame');
    }
  }, [countdown]);

  const playersWithUserData = useMemo(() => {
    return players.map((player) => {
      const userData = [user, opponentUser].find(
        (user) => user?.userId === player.userId
      );
      return {
        ...player,
        ...userData,
      };
    });
  }, [players, user, opponentUser]);

  const userPlayerData = playersWithUserData.find(
    (player) => player.userId === user?.userId
  );
  const opponentPlayerData = playersWithUserData.find(
    (player) => player.userId !== user?.userId
  );

  const defaultProfilePicture =
    'https://fastly.picsum.photos/id/892/200/200.jpg?hmac=lMI1NzfAzgWlBV0lCCLYXsxRxsq5Mwr-RK9K6AId4X4';

  const readyButtonText = useMemo(() => {
    if (countdown !== null) {
      return `Starting game in ${countdown}...`;
    }
    if (userPlayerData?.ready) {
      return 'Waiting for opponent';
    }
    return 'Ready Up!';
  }, [countdown, userPlayerData]);

  return (
    <SafeAreaView className='flex-col justify-between items-center w-full h-full'>
      <Text className='text-3xl font-bold mb-4'>Race</Text>
      <View className='flex-row justify-center items-center relative mt-4'>
        <View className='transform rotate-[-12deg]'>
          <PlayerCard
            name={userPlayerData?.username || 'You'}
            score={userPlayerData?.elo || 0}
            isReady={userPlayerData?.ready || false}
            bgColor='bg-blue-500'
            imageUri={userPlayerData?.profilePicture || defaultProfilePicture}
            isUser
          />
        </View>
        <View className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md absolute z-10 bottom-2'>
          <Text className='text-black font-bold'>VS</Text>
        </View>
        <View className='transform rotate-[12deg]'>
          <PlayerCard
            name={opponentPlayerData?.username || 'Opponent'}
            score={opponentPlayerData?.elo || 0}
            isReady={opponentPlayerData?.ready || false}
            bgColor='bg-black'
            imageUri={
              opponentPlayerData?.profilePicture || defaultProfilePicture
            }
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
            questions as fast as you can. Your score will be based on your
            accuracy.
          </Text>
        </View>
      )}
      <Pressable
        disabled={userPlayerData?.ready || gameStatus !== 'lobby'}
        className={`p-4 rounded-2xl mt-8 w-[90%] flex-row justify-center items-center ${
          userPlayerData?.ready || gameStatus !== 'lobby'
            ? 'bg-gray-400'
            : 'bg-primary'
        }`}
        onPress={() => updateReadyState(currentGame!.id, user!.userId, true)}
      >
        <Text
          className={`text-2xl ${
            userPlayerData?.ready || gameStatus !== 'lobby'
              ? 'text-gray-600'
              : 'text-white'
          }`}
        >
          {readyButtonText}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Lobby;
