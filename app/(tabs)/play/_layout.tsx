import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, useColorScheme, View } from 'react-native';
import { colors } from '@/utils/colors';
import Header from '@/components/Header';
import ProfileButton from '@/components/ProfileButton';
import HeartIcon from '@/components/Icons/HeartIcon';
import NotificationIcon from '@/components/Icons/NotificationIcon';
import React from 'react';

export default function PlayLayout() {
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#FFFFFF' : '#111719';
  const backgroundColor = colorScheme === 'dark' ? '#111719' : '#F3F3F3';

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: backgroundColor,
        },
        headerStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          header: ({ navigation, route, options, back }) => {
            return (
              <Header
                left={<ProfileButton />}
                right={
                  <>
                    <HeartIcon width={40} height={40} />
                    <NotificationIcon
                      width={40}
                      height={40}
                      color={iconColor}
                    />
                  </>
                }
                style={{ backgroundColor: backgroundColor }}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name='race'
        options={{
          title: 'Race',
        }}
      />
      <Stack.Screen
        name='lobby'
        options={{
          title: 'Lobby',
        }}
      />
      <Stack.Screen
        name='loadingGame'
        options={{
          title: 'Loading Game',
        }}
      />
    </Stack>
  );
}
