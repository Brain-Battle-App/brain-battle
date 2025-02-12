import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StreakModalProps {
  visible: boolean;
  onClose: () => void;
  streak: number;
}

interface RewardCardProps {
  days: string;
  reward: string;
  isActive: boolean;
  color: string;
}

const RewardCard = ({ days, reward, isActive, color }: RewardCardProps) => (
  <View
    className={`w-[70px] h-[70px] rounded-xl p-2 justify-center items-center
    ${isActive ? 'bg-gray-800' : 'bg-gray-900'}`}
  >
    <Text className={`text-${color} text-xs text-center`}>{days}</Text>
    <Text className={`text-${color} text-xs text-center mt-1`}>{reward}</Text>
  </View>
);

// Constants for animation URLs
const FIRE_ANIMATION = require('@/assets/animations/fire-animation.gif');
const SMALL_FIRE_ANIMATION = FIRE_ANIMATION;

const FlameIcon = () => (
  <Image
    source={FIRE_ANIMATION}
    style={{
      width: 24,
      height: 24,
    }}
  />
);

const StreakModal = ({ visible, onClose, streak }: StreakModalProps) => {
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-center items-center bg-black/50'>
        <View className='w-[90%] bg-black rounded-3xl p-6'>
          <TouchableOpacity
            onPress={onClose}
            className='absolute right-4 top-4 z-10'
          >
            <Ionicons name='close' size={24} color='white' />
          </TouchableOpacity>

          <Text className='text-[#FF9500] text-4xl font-bold text-center mb-2'>
            Daily Streak
          </Text>

          <View className='items-center my-6'>
            <View className='w-24 h-24 justify-center items-center relative'>
              <Image
                source={FIRE_ANIMATION}
                style={{
                  width: 120,
                  height: 120,
                  position: 'absolute',
                }}
              />
              <Text className='text-black text-2xl font-bold z-10 top-8 left-1'>
                {streak}
              </Text>
            </View>
            <Text className='text-white text-center mt-10'>
              A streak counts how many days{'\n'}you've practiced in a row
            </Text>
          </View>

          <Text className='text-white text-xl mb-4'>Streak Rewards</Text>

          <View className='flex-row justify-between mb-8'>
            <RewardCard
              days='Day 1-7'
              reward='2 Free Lives'
              isActive={streak <= 7}
              color='pink-500'
            />
            <RewardCard
              days='Day 8-14'
              reward='Elite Box'
              isActive={streak > 7 && streak <= 14}
              color='green-500'
            />
            <RewardCard
              days='Day 15+'
              reward='Master Box'
              isActive={streak > 14 && streak <= 29}
              color='purple-500'
            />
            <RewardCard
              days='Day 30+'
              reward='King Box'
              isActive={streak >= 30}
              color='cyan-400'
            />
          </View>

          <View className='flex-row justify-between mb-8'>
            {weekDays.map((day, index) => (
              <View key={day} className='items-center'>
                <Text className='text-gray-400 text-xs mb-2'>{day}</Text>
                <View
                  className={`w-8 h-8 rounded-full justify-center items-center
                  ${index < 4 ? 'bg-[#FF9500]' : 'bg-gray-800'}`}
                >
                  {index < 4 && <FlameIcon />}
                </View>
              </View>
            ))}
          </View>

          <Pressable
            className='bg-blue-500 rounded-full py-3 px-6'
            onPress={onClose}
          >
            <Text className='text-white text-center text-lg'>Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default StreakModal;
