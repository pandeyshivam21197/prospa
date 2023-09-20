import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Payments} from '../../../../screens/payments';

export type HomeNavigatorParamList = {
  [NavigationKeys.paymentScreen]: undefined;
};

const PaymentStack = createNativeStackNavigator<HomeNavigatorParamList>();

const PaymentStackNavigator = () => {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name={NavigationKeys.paymentScreen}
        component={Payments}
        options={{headerShown: false}}
      />
    </PaymentStack.Navigator>
  );
};

export default PaymentStackNavigator;
