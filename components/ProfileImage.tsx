import React from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import useProfilePicture from '@/common/hooks/useProfilePicture';

interface ProfileImageProps {
  size?: number;
}

const ProfileImage = ({ size = 40 }: ProfileImageProps) => {
  const { url, loading } = useProfilePicture();

  if (loading) return <ActivityIndicator size='large' color='#0000ff' />;

  return (
    <View>
      {url ? (
        <Image
          source={{ uri: url }}
          style={{ width: size, height: size, borderRadius: 50 }}
        />
      ) : (
        <Text>No profile picture found</Text>
      )}
    </View>
  );
};

export default ProfileImage;
