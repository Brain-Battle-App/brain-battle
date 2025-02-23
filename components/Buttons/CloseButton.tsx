import React from 'react';
import { Pressable } from 'react-native';
import CloseIcon from '../Icons/CloseIcon';

interface CloseButtonProps {
  onPress: () => void;
  className?: string; // Optional TailwindCSS class for customization
  iconSize?: { width: number; height: number }; // Optional icon size override
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onPress,
  className = 'bg-white p-4 rounded-full',
  iconSize,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`items-center justify-center p-2 ${className || ''}`}
      activeOpacity={0.8} // Adjust the opacity for better UX
    >
      <CloseIcon
        width={iconSize?.width || 16}
        height={iconSize?.height || 16}
      />
    </Pressable>
  );
};

export default CloseButton;
