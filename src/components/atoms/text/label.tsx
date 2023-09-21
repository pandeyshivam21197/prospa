import React, {FC} from 'react';
import Text, {FontWeights} from '../text';
import {StyleProp, TextStyle} from 'react-native';

interface ILabelProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Label: FC<ILabelProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 10,
  lineHeight = 12,
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
