import React, {FC} from 'react';
import Text, {FontWeights} from '../text';

interface ITitleProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
}

export const Title: FC<ITitleProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 24,
  lineHeight = 26,
}) => {
  return (
    <Text
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textColor={textColor}>
      {children}
    </Text>
  );
};
