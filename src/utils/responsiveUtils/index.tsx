import {PixelRatio} from 'react-native';
import {
  DESIGN_DIMENSION_HEIGHT,
  DESIGN_DIMENSION_WIDTH,
  normalizedBased,
} from './constants';
import {screenDimension} from '../dimensionUtils';

// eg:
// const styles = StyleSheet.create({
//  container: {
//    paddingHorizontal: pixelSizeHorizontal(15),
//    paddingVerticle: pixelSizeVertical(20),
//    marginBottom: pixelSizeVertical(10),
//    height: heightPixel(200),
//    width: widthPixel(200),
//  },

//  title: {
//    fontSize: fontPixel(18),
//    paddingVerticle: pixelSizeVertical(10),
//  },
// })

const widthBaseScale = screenDimension.width / DESIGN_DIMENSION_WIDTH;
const heightBaseScale = screenDimension.height / DESIGN_DIMENSION_HEIGHT;

function normalize(size: number, based = normalizedBased.width): number {
  const newSize =
    based === normalizedBased.height
      ? size * heightBaseScale
      : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, normalizedBased.width);
};

//for height  pixel
const heightPixel = (size: number): number => {
  return normalize(size, normalizedBased.height);
};
//for font  pixel
const fontPixel = (size: number): number => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number): number => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number): number => {
  return widthPixel(size);
};
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
