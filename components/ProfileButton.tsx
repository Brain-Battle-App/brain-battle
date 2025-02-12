import { Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { moderateScale } from 'react-native-size-matters';
import images from '@/constants/images';

export default function ProfileButton() {
  return (
    <Link href='/(profile)' asChild>
      <Pressable>
        <Image
          resizeMode='contain'
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
          }}
          source={images.user1}
        />
      </Pressable>
    </Link>
  );
}
