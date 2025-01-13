import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

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
    <TouchableOpacity
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
    </TouchableOpacity>
  );
};

export default SubjectButton;
