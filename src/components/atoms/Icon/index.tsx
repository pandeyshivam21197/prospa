import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../../assets/selection.json';

export const icons = {
  homeTab: 'homeTab',
  paymentTab: 'paymentTab',
  businessTab: 'businessTab',
  virtualTab: 'virtualTab',
  invoiceTab: 'invoiceTab',
  user: 'user',
  downArrow: 'downArrow',
  circleAlert: 'circleAlert',
  trophy: 'trophy',
};

export const Icon = createIconSetFromIcoMoon(icoMoonConfig);
