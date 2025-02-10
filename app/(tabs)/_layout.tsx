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
    <View className='h-full items-center justify-center'>
      <View
        className={`items-center justify-center ${!focused ? 'opacity-50' : ''}`}
      >
        <Image source={icon} resizeMode='contain' className='w-10 h-10' />
        <Text
          className={`${focused ? 'font-clashsemibold' : 'font-clashregular'} text-sm mt-1`}
          numberOfLines={1}
          style={{ textAlign: 'center', width: '100%' }}
        >
          {name}
        </Text>
      </View>
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
          paddingTop: 15,
        },
        tabBarItemStyle: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
      }}
    >
      <Tabs.Screen
        name='play'
        options={{
          title: 'play',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.play} name='Play' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='rewards'
        options={{
          title: 'rewards',
          headerShown: false,
          tabBarIcon: (props) => {
            const { focused } = props;
            return (
              <TabIcon icon={icons.rewards} name='Rewards' focused={focused} />
            );
          },
        }}
      />
      <Tabs.Screen
        name='friends'
        options={{
          title: 'friends',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.friends} name='Friends' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='leaderboard'
        options={{
          title: 'leaderboard',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
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
