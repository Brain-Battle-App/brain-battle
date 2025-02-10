import { View, Text, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/Header';
import BackButton from '@/components/Buttons/BackButton';
import ChevronRight from '@/components/Icons/ChevronRight';
import images from '@/constants/images';
import icons from '@/constants/icons';

interface SettingsItemProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
  onPress: () => void;
  showChevron?: boolean;
  textColor?: string;
}

const SettingsItem = ({
  icon,
  label,
  value,
  onPress,
  showChevron = true,
  textColor = '#111719',
}: SettingsItemProps) => (
  <Pressable
    onPress={onPress}
    className='flex-row items-center justify-between p-4 bg-white rounded-xl'
  >
    <View className='flex-row items-center gap-3'>
      {icon}
      <Text style={{ color: textColor }} className='font-clashregular text-lg'>
        {label}
      </Text>
    </View>
    <View className='flex-row items-center gap-2'>
      {value && (
        <Text className='font-clashregular text-gray-500'>{value}</Text>
      )}
      {showChevron && <ChevronRight width={24} height={24} />}
    </View>
  </Pressable>
);

export default function Settings() {
  const router = useRouter();

  return (
    <View className='flex-1 bg-gray-50'>
      <Header
        left={<BackButton onPress={() => router.back()} />}
        center={<Text className='font-clashsemibold text-xl'>Settings</Text>}
      />

      <View className='p-4 gap-4'>
        {/* Profile Card */}
        <View className='bg-white p-4 rounded-xl'>
          <View className='flex-row items-center gap-4'>
            <Image source={images.user1} className='w-16 h-16 rounded-full' />
            <View className='flex-1'>
              <Text className='font-clashsemibold text-xl'>Von Doe</Text>
              <Text className='font-clashregular text-gray-500'>
                vondoe@brainbattle.co
              </Text>
              {/* <View className='flex-row items-center gap-2 mt-1'>
                <Image
                  source={require('@/assets/images/school-badge.png')}
                  className='w-6 h-6'
                />
                <Text className='font-clashregular'>11th Grade</Text>
              </View> */}
            </View>
            {/* <Pressable onPress={() => router.push('/(profile)/edit-profile')}>
              <Text className='text-blue-500 font-clashregular'>
                Edit Profile
              </Text>
            </Pressable> */}
          </View>
        </View>

        {/* Settings Groups */}
        <View className='gap-4'>
          <SettingsItem
            icon={<Image source={icons.elements} className='w-6 h-6' />}
            label='App Preferences'
            onPress={() => router.push('/(profile)/app-preferences')}
          />

          {/* <SettingsItem
            icon={
              <Image
                source={require('@/assets/icons/globe.png')}
                className='w-6 h-6'
              />
            }
            label='Country'
            value='United States'
            onPress={() => router.push('/(profile)/country')}
          /> */}

          {/* <SettingsItem
            icon={
              <Image
                source={require('@/assets/icons/help.png')}
                className='w-6 h-6'
              />
            }
            label='Help and Support'
            onPress={() => {}}
          />

          <SettingsItem
            icon={
              <Image
                source={require('@/assets/icons/feedback.png')}
                className='w-6 h-6'
              />
            }
            label='Give Feedback'
            onPress={() => {}}
          />

          <SettingsItem
            icon={
              <Image
                source={require('@/assets/icons/terms.png')}
                className='w-6 h-6'
              />
            }
            label='Terms and Conditions'
            onPress={() => {}}
          />

          <SettingsItem
            icon={
              <Image
                source={require('@/assets/icons/privacy.png')}
                className='w-6 h-6'
              />
            }
            label='Privacy Policy'
            onPress={() => {}}
          />

          <SettingsItem
            icon={
              <Image
                source={require('@/assets/icons/logout.png')}
                className='w-6 h-6'
              />
            }
            label='Logout'
            onPress={() => {}}
            showChevron={false}
            textColor='#FF4545'
          /> */}
        </View>

        <Text className='text-center text-gray-500 font-clashregular mt-4'>
          Version 9.23.5 (12124)
        </Text>
      </View>
    </View>
  );
}
