import { View, Text, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '@/components/Header';
import BackButton from '@/components/Buttons/BackButton';
import { useState } from 'react';

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
  <View className='flex-row items-center justify-between p-4 bg-white rounded-xl'>
    <Text className='font-clashregular text-lg'>{label}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#E5E7EB', true: '#34D399' }}
      thumbColor='white'
      ios_backgroundColor='#E5E7EB'
    />
  </View>
);

export default function AppPreferences() {
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    pushNotifications: false,
    music: true,
    sound: false,
    hideELO: true,
    showBadge: true,
    darkMode: false,
  });

  const updatePreference =
    (key: keyof typeof preferences) => (value: boolean) => {
      setPreferences((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <View className='flex-1 bg-gray-50'>
      <Header
        left={<BackButton onPress={() => router.back()} />}
        center={
          <Text className='font-clashsemibold text-xl'>App Preferences</Text>
        }
      />

      <View className='p-4 gap-4'>
        <PreferenceItem
          label='Push Notifications'
          value={preferences.pushNotifications}
          onValueChange={updatePreference('pushNotifications')}
        />

        <PreferenceItem
          label='Music'
          value={preferences.music}
          onValueChange={updatePreference('music')}
        />

        <PreferenceItem
          label='Sound'
          value={preferences.sound}
          onValueChange={updatePreference('sound')}
        />

        <PreferenceItem
          label='Hide ELO from leaderboards'
          value={preferences.hideELO}
          onValueChange={updatePreference('hideELO')}
        />

        <PreferenceItem
          label='Show Badge in Game'
          value={preferences.showBadge}
          onValueChange={updatePreference('showBadge')}
        />

        <PreferenceItem
          label='Dark Mode'
          value={preferences.darkMode}
          onValueChange={updatePreference('darkMode')}
        />
      </View>
    </View>
  );
}
