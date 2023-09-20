import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Invoice} from '../../../../screens/invoice';

export type HomeNavigatorParamList = {
  [NavigationKeys.invoiceScreen]: undefined;
};

const InvoiceStack = createNativeStackNavigator<HomeNavigatorParamList>();

const InvoiceStackNavigator = () => {
  return (
    <InvoiceStack.Navigator>
      <InvoiceStack.Screen
        name={NavigationKeys.invoiceScreen}
        component={Invoice}
        options={{headerShown: false}}
      />
    </InvoiceStack.Navigator>
  );
};

export default InvoiceStackNavigator;
