import React, { createContext, useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { useColorScheme, colorScheme } from 'nativewind';

interface Settings {
  pushNotifications: boolean;
  music: boolean;
  sound: boolean;
  hideELO: boolean;
  showBadge: boolean;
  darkMode: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSetting: (key: keyof Settings, value: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { colorScheme: currentScheme } = useColorScheme();

  const [settings, setSettings] = useState<Settings>({
    pushNotifications: false,
    music: true,
    sound: false,
    hideELO: true,
    showBadge: true,
    darkMode: currentScheme === 'dark',
  });

  // Update color scheme when darkMode setting changes
  useEffect(() => {
    colorScheme.set(settings.darkMode ? 'dark' : 'light');
  }, [settings.darkMode]);

  const updateSetting = (key: keyof Settings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};
