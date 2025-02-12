import { View } from 'react-native';
import { useTheme } from '@/common/hooks/useTheme';
import { ComponentProps } from 'react';

export function ThemedContainer(props: ComponentProps<typeof View>) {
  const theme = useTheme();
  const { className = '', ...otherProps } = props;

  // This container will wrap the entire app and set the dark mode context
  return (
    <View
      className={`flex-1 ${theme === 'dark' ? 'dark' : ''} bg-background-light dark:bg-background-dark`}
      {...otherProps}
    />
  );
}
