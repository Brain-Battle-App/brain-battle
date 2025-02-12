import React from 'react';
import { Pressable, Text } from 'react-native';

interface SubjectButtonProps {
  subject: string;
  currentSubject: string;
  onPress: () => void;
  IconComponent: React.FC; // Pass the icon as a prop
  testType: string;
}

const SubjectButton: React.FC<SubjectButtonProps> = ({
  subject,
  currentSubject,
  onPress,
  IconComponent,
  testType,
}) => {
  const isSelected = subject === currentSubject;

  return (
    <Pressable
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row justify-center items-center p-4 rounded-2xl ${
        isSelected ? 'bg-primary' : 'bg-white'
      }`}
    >
      <IconComponent />
      <Text className={`ml-3 ${isSelected ? 'text-white' : 'text-black'}`}>
        {testType} - {subject}
      </Text>
    </Pressable>
  );
};

export default SubjectButton;
