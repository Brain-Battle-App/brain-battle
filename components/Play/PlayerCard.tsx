import React from 'react';
import { View, Text, Image } from 'react-native';
import CheckCircleIcon from '@/components/Icons/CheckCircleIcon'; // Import the new component
import { MaterialIcons } from '@expo/vector-icons'; // For checkmark icon
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PlayerCardProps {
  name: string; // Player or opponent name
  score: number; // Player or opponent score
  imageUri?: string; // Image URL for the profile picture
  isReady: boolean; // Indicates readiness
  bgColor: string; // Background color for the card
  isUser?: boolean; // Indicates if the player is the user
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  score,
  imageUri,
  isReady,
  bgColor,
  isUser = false,
}) => {
  return (
    <View
      className={`w-48 h-64 rounded-lg shadow-md flex flex-col items-center p-4 ${bgColor} relative`}
    >
      <CheckCircleIcon
        className={`absolute top-[-15] ${isUser ? 'right-[-15]' : 'left-[-15]'}`}
        checked={isReady}
        checkedClassName='border border-white bg-green-500'
      />

      {/* Profile Picture */}
      <View className='w-20 h-20 rounded-full overflow-hidden mb-2'>
        <Image
          source={{ uri: imageUri }}
          className='w-full h-full'
          resizeMode='cover'
        />
      </View>

      {/* Score Badge */}
      <View className='absolute top-20 bg-white shadow rounded-full px-2 py-1'>
        <Text className='text-xs font-bold text-black'>{score}</Text>
      </View>

      {/* Name Label */}
      <Text className='text-lg font-semibold text-white mt-4'>{name}</Text>
    </View>
  );
};

export default PlayerCard;
