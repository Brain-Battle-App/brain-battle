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
import GradientText from './GradientText';
interface StreakModalProps {
  visible: boolean;
  onClose: () => void;
  streakData?: StreakData;
}

interface RewardCardProps {
  days: string;
  reward: string;
  isActive: boolean;
  colors: string[];
  imageUrl: string;
  imageBorderColor: string;
}

const RewardCard = ({
  days,
  reward,
  isActive,
  colors,
  imageUrl,
  imageBorderColor,
}: RewardCardProps) => (
  <View
    className={`w-[85px] h-[120px] rounded-2xl p-2 justify-between items-center
    ${isActive ? 'bg-gray-800' : 'dark:bg-background-dark'}`}
  >
    {reward === '2 Free\n Lives' ? (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: imageBorderColor,

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            top: 9.5,
            left: 6.5,
            width: 45,
            height: 45,
            resizeMode: 'contain',
          }}
        />
      </View>
    ) : (
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: imageBorderColor,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 4,
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
          }}
        />
      </View>
    )}
    <Text className={`text-white  text-center`}>{days}</Text>
    <GradientText
      text={reward}
      colors={colors}
      className='text-sm font-bold text-center'
    />
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

const StreakModal = ({
  visible,
  onClose,
  streakData = {
    currentStreak: 0,
    completedDays: [],
    longestStreak: 0,
    lastUpdated: new Date(),
  },
}: StreakModalProps) => {
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const rewardCards = [
    {
      days: 'Day 1-7',
      reward: '2 Free\n Lives',
      colors: ['#FF5A90', '#FF2D72'],
      imageBorderColor: '#FF5A90',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/brain-battle-d367d.firebasestorage.app/o/rewards%2Fheart.png?alt=media&token=52b4649d-fd1f-4b3d-943e-edd99d508c1b',
    },
    {
      days: 'Day 8-14',
      reward: 'Elite\nBox',
      colors: ['#D0FF00', '#1A5408'],
      imageBorderColor: '#59976E',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/502a/0020/4da7fe27a326b8c18451faa361cda535?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aV7Hh3L2DhLDUsSMt78wWscL8rzsIrGSj1cL37gcJDkQcBgiwT7s~UPCKF4heSdBn-~o~eLY48YPA8fxppdYE7pth8O~v2gByN0IIVfh0F0zVK7zeyGtiJaKpeZWxiV~NROIdc8QNWzZTy8FHHLG5MQYEyMvePfLRni20eOP6GBSg3Fxc~vO75fYgy~jikqHZuZP6quL1-NVDkWpXH1vVrP3J9L63-7rw1seqUHNVtXWtBI-HBRoT1mD3CpZD4NwEW5b6h9SnnCDJBsQAAcNjGxp263lPAKPDhIb-Pes2rUQryWW-Ra7rqffdo4zFS9KRhn7UgDP5qNX1XIahliaBA__',
    },
    {
      days: 'Day 15+',
      reward: 'Master\nBox',
      colors: ['#D755FF', '#7818A9', '#470168'],
      imageBorderColor: '#7818A9',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e150/c5c7/d76c7b1ba05ce3c5fec09f5f45d73e74?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ksZc40K3EF7d61lJmGV6eEegmW60nbzkuf1DIWJwHmK4PO1MOm4WfYsjp12HfH4LfsHNX268UHOQMTew9PazT5gmsR7tyR5PfQvmRoa7Rk1Aa70sbZUhvxSSIiWeirf~bDZva-IupTgLPuPnauT~cwUyoA9gTeYuC1GSW1ULC~ehvHn4k5HhYzdJ9dvhawifA1L~Z2L4Z9pWFcPzVGRaXd7GLPteno1KydvhhRI82kidSNdR4b70wfoYwKEgvDTGK8~8NLeEfznHfU-UEGjDVY3kBZ8xE-QG0WFMKchCwiz~k3Mpi39LZb9QjN1v8OxpB~3HzHxYByLp1k0MaGWFpQ__',
    },
    {
      days: 'Day 30+',
      reward: 'King\nBox',
      colors: ['#03E9F5', '#253939'],
      imageBorderColor: '#037676',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/8f35/392d/7ebbed0fc8331e56226faa8f7d975059?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aT8GEet8b1btfR2B4OENCoQliWMCCeaOLa9vu-xNbyxCUWsObo2OZrSiyD6iAcRXhAM77Gx0fgIO0zVtdveWSZMNRocloMRiEpd5FVQArIfQ3HQ9Q8sHh~fjgmjbIWmTYOSIW~u~RCzFciX3n073tQplii8Xp2RPtbOaOtSzCsImGJXf5HYAmqehhD~mtWNiGnSWAEkBYyBtPji8FPk0jYD1JbyslBRY3vNjM0vuM3H-yr7KwXLjQvHnjkBQZ0QGoZPnQxmuBF28QBzUX9s-g4hQiKGensc1PVqHsGf~F8FuV5R~wbPAuhjOzvyXOdz0yv5JI1EF2JYyHD8PW37PQQ__',
    },
  ];

  const streak = streakData.currentStreak;

  console.log('completed days', streakData.completedDays);

  const isDateCompleted = (day: string) => {
    if (!streakData?.completedDays) return false;

    const today = new Date();
    const dayIndex = weekDays.indexOf(day);
    const date = new Date(
      today.setDate(today.getDate() - (today.getDay() - dayIndex))
    );

    return streakData.completedDays.some((timestamp) => {
      const completedDate = new Date(timestamp.seconds * 1000);
      return completedDate.toDateString() === date.toDateString();
    });
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-center items-center bg-black/50'>
        <View className='w-[95%] bg-black rounded-3xl p-6'>
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
              A <Text className='text-orange-500'>streak</Text> counts how many
              days
              {'\n'}you've practiced in a row
            </Text>
          </View>

          <Text className='text-white text-xl mb-4'>Streak Rewards</Text>

          <View className='flex-row justify-between mb-8 '>
            {rewardCards.map((card, index) => (
              <RewardCard
                key={index}
                days={card.days}
                reward={card.reward}
                isActive={streak >= parseInt(card.days.split(' ')[0])}
                colors={card.colors}
                imageUrl={card.imageUrl}
                imageBorderColor={card.imageBorderColor}
              />
            ))}
          </View>
          <View className='flex-row justify-between mb-8'>
            {weekDays.map((day) => (
              <View key={day} className='items-center'>
                <Text className='text-gray-400 text-xs mb-2'>{day}</Text>
                <View
                  className={`w-8 h-8 rounded-full justify-center items-center
                    ${isDateCompleted(day) ? 'bg-[#FFCE51]' : 'bg-gray-800'}`}
                >
                  {isDateCompleted(day) && <FlameIcon />}
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
