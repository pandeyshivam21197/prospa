import React, {FC} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {fontPixel, heightPixel} from '../../../utils/responsiveUtils';

export enum FontWeights {
  normal = '400', //400
  semiBold = '500', //500
  bold = '500', //600
}

interface ITextProps {
  textColor?: string;
  fontWeight?: FontWeights;
  children: React.ReactNode;
  fontSize: number;
  lineHeight: number;
}

const Text: FC<ITextProps> = ({
  fontSize,
  lineHeight,
  textColor = '#1C1335',
  fontWeight = FontWeights.normal,
  children,
}) => {
  const styles = getStyles(textColor, fontWeight, fontSize, lineHeight);

  return <RNText style={styles.text}>{children}</RNText>;
};

//TODO: add font family
const getStyles = (
  textColor: string,
  fontWeight: FontWeights,
  fontSize: number,
  lineHeight: number,
) =>
  StyleSheet.create({
    text: {
      color: textColor,
      fontWeight: fontWeight,
      fontSize: fontPixel(fontSize),
      lineHeight: heightPixel(lineHeight),
    },
  });

export default Text;
