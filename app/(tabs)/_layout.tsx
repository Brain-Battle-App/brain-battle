import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import PlayIcon from '@/components/Icons/PlayIcon';
import RewardsIcon from '@/components/Icons/RewardsIcon';
import FriendsIcon from '@/components/Icons/FriendsIcon';
import LeaderboardIcon from '@/components/Icons/LeaderboardIcon';
import { useColorScheme } from 'nativewind';

interface TabIconProps {
  name: string;
  focused: boolean;
  children: React.ReactNode;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused, children }) => {
  return (
    <View className='h-full items-center justify-center'>
      <View
        className={`items-center justify-center ${!focused ? '' : 'rounded-full w-28 h-28 dark:bg-[#111719] bg-[#ffffff] '}`}
      >
        {children}
        <Text
          className={`${focused ? 'font-clashsemibold' : 'font-clashregular'} text-sm mt-1 text-text dark:text-text-dark`}
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
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: colorScheme === 'dark' ? '#111719' : '#FFFFFF',
          borderTopWidth: 0,
          paddingTop: 15,
        },
        tabBarItemStyle: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='play'
        options={{
          title: 'play',
          tabBarIcon: ({ focused }) => (
            <TabIcon name='Play' focused={focused}>
              <PlayIcon color={focused ? '#F50B00' : '#ECEDEE'} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='rewards'
        options={{
          title: 'rewards',
          tabBarIcon: ({ focused }) => (
            <TabIcon name='Rewards' focused={focused}>
              <RewardsIcon color={focused ? '#FDB914' : '#ECEDEE'} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='friends'
        options={{
          title: 'friends',
          tabBarIcon: ({ focused }) => (
            <TabIcon name='Friends' focused={focused}>
              <FriendsIcon color={focused ? '#51B5FD' : '#ECEDEE'} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='leaderboard'
        options={{
          title: 'leaderboard',
          tabBarIcon: ({ focused }) => (
            <TabIcon name='Leaderboard' focused={focused}>
              <LeaderboardIcon color={focused ? '#51B5FD' : '#ECEDEE'} />
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
