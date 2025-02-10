import { Stack, useRouter } from 'expo-router';
import Header from '@/components/Header';
import BackButton from '@/components/Buttons/BackButton';
import SettingsButton from '@/components/Buttons/SettingsButton';
import HeartIcon from '@/components/Icons/HeartIcon';
import NotificationIcon from '@/components/Icons/NotificationIcon';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { Text } from 'react-native';

const ProfileLayout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          header: () => (
            <Header
              left={<BackButton onPress={() => router.back()} />}
              center={
                <Text className='font-clashsemibold text-xl'>Profile</Text>
              }
              right={
                <>
                  <HeartIcon width={40} height={40} />
                  <SettingsButton
                    onPress={() => router.push('/(profile)/settings')}
                  />
                </>
              }
            />
          ),
        }}
      />
      <Stack.Screen name='settings' />
      <Stack.Screen name='details' />
      <Stack.Screen
        name='app-preferences'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
