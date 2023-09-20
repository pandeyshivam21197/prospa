import React, {FC} from 'react';
import Text, {FontWeights} from '../text';

interface ILabelProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
}

export const Label: FC<ILabelProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 10,
  lineHeight = 12,
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
