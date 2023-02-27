import type {Frame} from 'react-native-vision-camera';

export function superImposeImage(frame: Frame, image: any) {
  'worklet';
  return __superImposeImage(frame, image);
}
