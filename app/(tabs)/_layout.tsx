import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import icons from '../../constants/icons';

interface TabIconProps {
  icon: ImageSourcePropType;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, name, focused }) => {
  return (
    <View
      className={`items-center justify-center gap-2 mt-6 ${!focused ? 'opacity-50' : ''}`}
    >
      <Image source={icon} resizeMode='contain' className='w-10 h-10' />
      <Text
        className={`${focused ? 'font-clashsemibold' : 'font-clashregular'} text-xs`}
        style={{ flexWrap: 'wrap', textAlign: 'center', width: '100%' }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          borderTopWidth: 2,
          borderTopColor: '#D8D6FF',
        },
      }}
    >
      <Tabs.Screen
        name='play/index'
        options={{
          title: 'play',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.play} name='Play' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='rewards/index'
        options={{
          title: 'rewards',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.rewards} name='Rewards' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='friends/index'
        options={{
          title: 'friends',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.friends} name='Friends' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='leaderboard/index'
        options={{
          title: 'leaderboard',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.leaderboard}
              name='Leaderboard'
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
