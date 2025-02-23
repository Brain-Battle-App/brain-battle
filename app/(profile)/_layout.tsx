import { Stack, useRouter } from 'expo-router';
import Header from '@/components/Header';
import BackButton from '@/components/Buttons/BackButton';
import SettingsButton from '@/components/Buttons/SettingsButton';
import HeartIcon from '@/components/Icons/HeartIcon';
import NotificationIcon from '@/components/Icons/NotificationIcon';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { Text } from 'react-native';
import { useColorScheme } from 'nativewind';
const ProfileLayout = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <Header
                left={<BackButton onPress={() => router.back()} />}
                title='Profile'
                right={
                  <>
                    <HeartIcon width={40} height={40} />
                    <SettingsButton
                      color={iconColor}
                      onPress={() => router.push('/(profile)/settings')}
                    />
                  </>
                }
              />
            );
          },
        }}
      />
      <Stack.Screen
        name='settings'
        options={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <Header
                left={<BackButton onPress={() => router.back()} />}
                title={title.charAt(0).toUpperCase() + title.slice(1)}
              />
            );
          },
        }}
      />
      <Stack.Screen name='details' />
      <Stack.Screen
        name='appPreferences'
        options={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            console.log(title);
            const isUpperCase = (char: string) => /^[A-Z]*$/.test(char);
            return (
              <Header
                left={<BackButton onPress={() => router.back()} />}
                title={title
                  .split('')
                  .map((char, index) => {
                    if (index === 0) return char.toUpperCase();
                    return isUpperCase(char) ? char.padStart(2) : char;
                  })
                  .join('')}
              />
            );
          },
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
