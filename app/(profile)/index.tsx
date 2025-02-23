import { View, Text, ScrollView, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/utils/colors';
import { Ionicons } from '@expo/vector-icons';
import ProfileImage from '@/components/ProfileImage';
import { useAuthContext } from '@/common/hooks/context/useAuthContext';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <SafeAreaView className='flex-1 justify-start items-center w-full dark:bg-background-dark gap-4'>
      {/* Profile Header */}
      {/* Profile Header */}
      <View className='justify-start items-center bg-background-elevated dark:bg-background-elevated-dark w-[90%] rounded-3xl p-4 '>
        <View style={{ position: 'relative' }}>
          <ProfileImage size={100} />
        </View>

        <Text className='text-2xl font-semibold dark:text-white mt-4'>
          {user?.username}
        </Text>
        <Text
          style={{
            color: '#8E8E93',
            marginTop: 4,
          }}
        >
          Prodigy
        </Text>

        {/* Stats */}
        <View
          style={{
            flexDirection: 'row',
            gap: 40,
            marginTop: 20,
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>38</Text>
            <Text style={{ color: '#8E8E93' }}>Friends</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>1,342</Text>
            <Text style={{ color: '#8E8E93' }}>Overall ELO</Text>
          </View>
        </View>
      </View>

      {/* Free Plan Button */}
      <Pressable
        style={({ pressed }) => [
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: pressed ? '#E5E5EA' : '#F2F2F7',
            width: '90%',
            padding: 16,
            borderRadius: 12,
            marginTop: 20,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='star-outline' size={24} color='#8E8E93' />
          <Text style={{ marginLeft: 8 }}>Free Plan</Text>
        </View>
        <Text style={{ color: '#007AFF' }}>Upgrade</Text>
      </Pressable>

      {/* Courses */}
      <View style={{ width: '90%', marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Courses</Text>
          <Pressable>
            <Text style={{ color: '#8E8E93' }}>History</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Pressable
            style={{
              padding: 16,
              backgroundColor: '#F2F2F7',
              borderRadius: 12,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18 }}>SAT</Text>
          </Pressable>
          <Pressable
            style={{
              padding: 16,
              backgroundColor: '#F2F2F7',
              borderRadius: 12,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18 }}>ACT</Text>
          </Pressable>
        </View>
      </View>

      {/* Rankings */}
      <View style={{ width: '90%', marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 16 }}>
          Ranking (2)
        </Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {/* Add ranking items here */}
        </View>
      </View>

      {/* Badges */}
      <View style={{ width: '90%', marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Badges (3)</Text>
          <Pressable>
            <Text style={{ color: '#8E8E93' }}>See Collection</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {/* Add badge items here */}
        </View>
      </View>

      {/* Friends */}
      <View style={{ width: '90%', marginTop: 20, marginBottom: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 16 }}>
          Friends (6)
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Add friend avatars here */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
