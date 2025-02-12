import { View, Text } from 'react-native';
import { useTheme } from '@/common/hooks/useTheme';
import { ComponentProps } from 'react';

export function ThemedView(props: ComponentProps<typeof View>) {
  const theme = useTheme();
  const { className = '', ...otherProps } = props;

  return (
    <View
      className={`bg-background-light dark:bg-background-dark ${className}`}
      {...otherProps}
    />
  );
}

export function ThemedText(props: ComponentProps<typeof Text>) {
  const theme = useTheme();
  const { className = '', ...otherProps } = props;

  return (
    <Text
      className={`text-text-light dark:text-text-dark ${className}`}
      {...otherProps}
    />
  );
}
