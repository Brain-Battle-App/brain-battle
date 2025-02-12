import { View, Text, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/Header';
import BackButton from '@/components/Buttons/BackButton';
import { useSettings } from '@/common/providers/SettingsProvider';
import { useColorScheme } from 'nativewind';
import { colors } from '@/utils/colors';

interface PreferenceItemProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const PreferenceItem = ({
  label,
  value,
  onValueChange,
}: PreferenceItemProps) => (
  <View className='flex-row items-center justify-between p-4 bg-background-elevated dark:bg-background-elevated-dark rounded-xl'>
    <Text className='font-clashregular text-lg text-text dark:text-text-dark'>
      {label}
    </Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#E5E7EB', true: colors.primary }}
      thumbColor='white'
      ios_backgroundColor='#E5E7EB'
    />
  </View>
);

export default function AppPreferences() {
  const router = useRouter();
  const { settings, updateSetting } = useSettings();
  const { colorScheme } = useColorScheme();

  console.log('Current color scheme:', colorScheme);

  return (
    <View className='flex-1 bg-background dark:bg-background-dark'>
      <Text className='text-gray-900 dark:text-white p-4'>
        Current theme: {colorScheme}
      </Text>
      <View className='p-4 gap-4'>
        <PreferenceItem
          label='Dark Mode'
          value={settings.darkMode}
          onValueChange={(value) => updateSetting('darkMode', value)}
        />
        <PreferenceItem
          label='Push Notifications'
          value={settings.pushNotifications}
          onValueChange={(value) => updateSetting('pushNotifications', value)}
        />
      </View>
    </View>
  );
}
