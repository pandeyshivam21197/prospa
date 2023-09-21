import React, {FC} from 'react';
import Text, {FontWeights} from '../text';
import {StyleProp, TextStyle} from 'react-native';

interface ITitleProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Title: FC<ITitleProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 24,
  lineHeight = 26,
  style,
}) => {
  return (
    <Text
      style={style}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textColor={textColor}>
      {children}
    </Text>
  );
};
