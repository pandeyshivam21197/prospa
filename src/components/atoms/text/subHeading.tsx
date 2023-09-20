import React, {FC} from 'react';
import Text, {FontWeights} from '../text';

interface ISubHeadingProps {
  textColor?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: FontWeights;
  children: React.ReactNode;
}

export const SubHeading: FC<ISubHeadingProps> = ({
  children,
  fontWeight,
  textColor,
  fontSize = 15,
  lineHeight = 17,
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
