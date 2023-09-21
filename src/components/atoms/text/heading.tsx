import React, {FC} from 'react';
import Text, {FontWeights} from '../text';
import {StyleProp, TextStyle} from 'react-native';

interface IHeadingProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Heading: FC<IHeadingProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 20,
  lineHeight = 22,
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
