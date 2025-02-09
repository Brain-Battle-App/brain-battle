import { View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { moderateScale } from 'react-native-size-matters';
import HeartIcon from './Icons/HeartIcon';
import NotificationIcon from './Icons/NotificationIcon';
import images from '../constants/images';
import ProfileButton from './ProfileButton';

export default function Header() {
  const router = useRouter();

  return (
    <View className='flex-row justify-between items-center w-[90%]'>
      <ProfileButton />
      <View className='flex-row justify-between items-center gap-4'>
        <HeartIcon width={40} height={40} />
        <NotificationIcon width={40} height={40} />
      </View>
    </View>
  );
}
