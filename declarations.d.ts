import {
  ViewProps as RNViewProps,
  TextProps as RNTextProps,
  PressableProps as RNPressableProps,
  ImageProps as RNImageProps,
} from 'react-native';

declare module 'react-native' {
  export interface ViewProps extends RNViewProps {
    className?: string;
  }
  export interface TextProps extends RNTextProps {
    className?: string;
  }

  export interface PressableProps extends RNPressableProps {
    className?: string;
  }

  export interface ImageProps extends RNImageProps {
    className?: string;
  }

  declare module '*.webp' {
    const content: any;
    export default content;
  }
}
