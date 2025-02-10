import { View, Text, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import icons from '../../constants/icons';
import tests from '../../constants/tests';

const Settings = () => {
  return (
    <SafeAreaView className='bg-light' edges={['top', 'left', 'right']}>
      <Text> Settings </Text>
    </SafeAreaView>
  );
};

export default Settings;
