import React from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import useProfilePicture from '@/common/hooks/useProfilePicture';

const ProfileImage = () => {
  const { url, loading } = useProfilePicture();

  if (loading) return <ActivityIndicator size='large' color='#0000ff' />;

  return (
    <View>
      {url ? (
        <Image
          source={{ uri: url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      ) : (
        <Text>No profile picture found</Text>
      )}
    </View>
  );
};

export default ProfileImage;
