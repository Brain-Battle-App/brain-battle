import { View, Text, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import icons from '../../constants/icons';
import tests from '../../constants/tests';

const Details = () => {
  return (
    <SafeAreaView className='bg-light' edges={['top', 'left', 'right']}>
      <Text> Details </Text>
    </SafeAreaView>
  );
};

export default Details;
