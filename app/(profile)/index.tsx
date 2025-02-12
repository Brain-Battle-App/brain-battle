import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/utils/colors';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen
        options={{
          headerTitle: 'Profile',
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <Ionicons name='chevron-back' size={24} color={colors.primary} />
            </Pressable>
          ),
          headerRight: () => (
            <View
              style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}
            >
              <Pressable>
                <Ionicons name='heart' size={24} color='pink' />
                <View
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    backgroundColor: 'pink',
                    borderRadius: 10,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 12 }}>4</Text>
                </View>
              </Pressable>
              <Pressable>
                <Ionicons
                  name='settings-outline'
                  size={24}
                  color={colors.gray}
                />
              </Pressable>
            </View>
          ),
        }}
      />

      {/* Profile Header */}
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: 'https://placeholder.com/150' }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FF9500',
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Ionicons name='flame' size={16} color='#fff' />
            <Text style={{ color: '#fff', marginLeft: 4 }}>19</Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            marginTop: 12,
          }}
        >
          Von Doe
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
      </View>
    </ScrollView>
  );
};

export default Profile;
