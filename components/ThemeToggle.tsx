import { Switch } from 'react-native';
import { useThemeUtils } from '@/common/hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeUtils();

  return (
    <Switch
      value={isDark}
      onValueChange={toggleTheme}
      trackColor={{ false: '#E5E7EB', true: '#34D399' }}
      thumbColor='white'
      ios_backgroundColor='#E5E7EB'
    />
  );
}
