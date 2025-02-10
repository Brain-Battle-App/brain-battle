import { Pressable } from 'react-native';
import SettingsIcon from '../Icons/SettingsIcon';

interface SettingsButtonProps {
  onPress: () => void;
  width?: number;
  height?: number;
}

export default function SettingsButton({
  onPress,
  width = 40,
  height = 40,
}: SettingsButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <SettingsIcon width={width} height={height} />
    </Pressable>
  );
}
