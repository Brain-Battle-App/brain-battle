import { useSettings } from '@/common/providers/SettingsProvider';

type Theme = 'light' | 'dark';

export const useTheme = (): Theme => {
  const { theme } = useSettings();
  return theme;
};

interface ThemeUtils {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeUtils = (): ThemeUtils => {
  const { theme, settings, updateSetting } = useSettings();

  const toggleTheme = () => {
    updateSetting('darkMode', !settings.darkMode);
  };

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
  };
};
