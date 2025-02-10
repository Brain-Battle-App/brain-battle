import { Stack } from 'expo-router';
import Header from '@/components/Header';
import ProfileButton from '@/components/ProfileButton';
import HeartIcon from '@/components/Icons/HeartIcon';
import NotificationIcon from '@/components/Icons/NotificationIcon';
import BackButton from '@/components/Buttons/BackButton';
import { getHeaderTitle } from '@react-navigation/elements';

import SettingsIcon from '@/components/Icons/SettingsIcon';
import React from 'react';

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <Header
                left={
                  <BackButton
                    onPress={() => {
                      console.log('going back');
                      navigation.goBack();
                    }}
                    title={title}
                  />
                }
                right={
                  <>
                    <HeartIcon width={40} height={40} />
                    <SettingsIcon width={40} height={40} />
                  </>
                }
              />
            );
          },
        }}
      />
      <Stack.Screen name='settings' />
      <Stack.Screen name='details' />
    </Stack>
  );
};

export default ProfileLayout;
