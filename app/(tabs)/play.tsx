import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { useFindAvailableGame } from '@/common/hooks/queries/useFindAvailableGame';
import { useCreateGame } from '@/common/hooks/mutations/useCreateGame';
import { useJoinGame } from '@/common/hooks/mutations/useJoinGame';
import { useUserContext } from '@/common/hooks/context/useUserContext';
import { useUpdateGame } from '@/common/hooks/mutations/useUpdateGame';
import { usePlayContext } from '@/common/hooks/context/usePlayContext';
import images from '@/constants/images';
import { moderateScale } from '@/utils/Mertics';
import HeartIcon from '@/components/Icons/HeartIcon';
import NotificationIcon from '@/components/Icons/NotificationIcon';
import SATLogo from '@/components/Images/SATLogo';
import ACTLogo from '@/components/Images/ACTLogo';

const Play = () => {
  const [loading, setLoading] = useState(false);

  const { currentGame, setCurrentGame } = usePlayContext();
  const { findAvailableGame } = useFindAvailableGame();
  const { createGame } = useCreateGame();
  const { joinGame } = useJoinGame();
  const { updateGame } = useUpdateGame();
  const { user } = useUserContext();
  const { username, userId, rank, wins, losses } = user!;

  const handlePlay = async () => {
    setLoading(true);

    try {
      // Try to find an available game
      const availableGame = await findAvailableGame(userId);

      if (availableGame) {
        await joinGame(availableGame.id, userId);
        Alert.alert('Joined Game', `You joined game: ${availableGame.id}`);
        updateGame({ id: availableGame.id, status: 'lobby' });
        setCurrentGame(availableGame);
      } else {
        // Create a new game if no game is available
        const newGame = await createGame(userId);
        Alert.alert(
          'Game Created',
          `You created a new game with ID: ${newGame.id}`
        );
        setCurrentGame(newGame);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className='flex-1 justify-start items-center w-full'>
      <View className='flex-row justify-between items-center w-[90%]'>
        <Image
          resizeMode='contain'
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
          }}
          source={images.user1}
        />
        <View className='flex-row justify-between items-center gap-4'>
          <HeartIcon width={40} height={40} />
          <NotificationIcon width={40} height={40} />
        </View>
      </View>
      <View className='bg-white w-[90%] mt-8 rounded-lg p-4'>
        <View className='flex-row justify-center items-center '>
          <Image
            resizeMode='contain'
            style={{
              width: moderateScale(80),
              height: moderateScale(80),
            }}
            source={images.user1}
          />
          <View className='ml-4'>
            <Text className='text-3xl'>{username}</Text>
            <Text className='text-xl'>{rank}</Text>
            <View className='bg-gray-100 p-2 rounded-lg mt-2'>
              <Text>Record 43-20</Text>
            </View>
          </View>
        </View>
        <View className='flex-row flex-wrap justify-between mt-4 w-full'>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT Overall</Text>
            <Text className='text-xl'>1140</Text>
          </View>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT - Math</Text>
            <Text className='text-xl'>1140</Text>
          </View>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT - English & Reading</Text>
            <Text className='text-xl'>1140</Text>
          </View>
          <View className='border rounded-xl border-gray-200 p-4 justify-center items-center w-[48%] mb-4'>
            <Text className='text-sm'>ACT - Science</Text>
            <Text className='text-xl'>1140</Text>
          </View>
        </View>
      </View>
      <View className='flex-row justify-between     items-center w-[90%] mt-4'>
        <Text className='text-2xl font-semibold'>Head to Head</Text>
      </View>
      <View className='flex-row'>
        <View className='flex-col justify-between items-center w-[48%] bg-white rounded-lg p-4 mt-4'>
          <SATLogo />
          <View>
            <Text>Play</Text>
          </View>
        </View>
        <View className='flex-col justify-between items-center w-[48%] bg-white rounded-lg p-4 mt-4'>
          <ACTLogo />
          <View className='bg-primary px-4 py-2 rounded-md'>
            <Text className='text-white text-lg'>Play</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={handlePlay}
        disabled={loading}
        className='bg-blue-500 p-4 rounded-md'
      >
        {loading ? (
          <ActivityIndicator size='small' color='#ffffff' />
        ) : (
          <Text className='text-white text-lg'>Play</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Play;
