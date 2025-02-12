import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientTextProps {
  text: string | number;
  colors: string[];
  className?: string;
}

const GradientText = ({ text, colors, className = '' }: GradientTextProps) => {
  return (
    <MaskedView maskElement={<Text className={className}>{text}</Text>}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text className={`${className} opacity-0`}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
