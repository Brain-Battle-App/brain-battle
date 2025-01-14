import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Matching = () => {
  return (
    <SafeAreaView className='bg-light' edges={['top', 'left', 'right']}>
      <Text> Matching </Text>
    </SafeAreaView>
  );
};

export default Matching;
