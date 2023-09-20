import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Business} from '../../../../screens/business';

export type HomeNavigatorParamList = {
  [NavigationKeys.businessScreen]: undefined;
};

const BusinessStack = createNativeStackNavigator<HomeNavigatorParamList>();

const BusinessStackNavigator = () => {
  return (
    <BusinessStack.Navigator>
      <BusinessStack.Screen
        name={NavigationKeys.businessScreen}
        component={Business}
        options={{headerShown: false}}
      />
    </BusinessStack.Navigator>
  );
};

export default BusinessStackNavigator;
