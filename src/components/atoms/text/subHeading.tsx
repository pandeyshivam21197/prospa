import React, {FC} from 'react';
import Text, {FontWeights} from '../text';
import {StyleProp, TextStyle} from 'react-native';

interface ISubHeadingProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
  style: StyleProp<TextStyle>;
}

export const SubHeading: FC<ISubHeadingProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 15,
  lineHeight = 17,
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
