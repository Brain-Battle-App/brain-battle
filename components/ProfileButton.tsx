import { Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { moderateScale } from 'react-native-size-matters';
import images from '@/constants/images';
import ProfileImage from './ProfileImage';

interface ProfileButtonProps {
  size?: number;
}

export default function ProfileButton({ size = 50 }: ProfileButtonProps) {
  return (
    <Link href='/(profile)' asChild>
      <Pressable>
        <ProfileImage size={size} />
      </Pressable>
    </Link>
  );
}
