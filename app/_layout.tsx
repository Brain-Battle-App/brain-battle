import { StyleSheet, Text, View } from 'react-native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import '../global.css';
import { AuthProvider } from '@/common/providers/AuthProvider';
import { PlayProvider } from '@/common/providers/PlayProvider';
import { SettingsProvider } from '@/common/providers/SettingsProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    // Loading the Clash Display font files

    ClashDisplayMedium: require('../assets/fonts/ClashDisplayMedium.otf'),
    ClashDisplayRegular: require('../assets/fonts/ClashDisplayRegular.otf'),
    ClashDisplayBold: require('../assets/fonts/ClashDisplayBold.otf'),
    ClashDisplaySemibold: require('../assets/fonts/ClashDisplaySemibold.otf'),
    ClashDisplayLight: require('../assets/fonts/ClashDisplayLight.otf'),
    ClashDisplayExtralight: require('../assets/fonts/ClashDisplayExtralight.otf'),

    // Loading the Poppins font files

    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsExtralight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <AuthProvider>
      <SettingsProvider>
        <PlayProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='(auth)' />
            <Stack.Screen name='(tabs)' />
          </Stack>
        </PlayProvider>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default RootLayout;
