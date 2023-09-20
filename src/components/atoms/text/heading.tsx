import React, {FC} from 'react';
import Text, {FontWeights} from '../text';

interface IHeadingProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
}

export const Heading: FC<IHeadingProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 20,
  lineHeight = 22,
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
