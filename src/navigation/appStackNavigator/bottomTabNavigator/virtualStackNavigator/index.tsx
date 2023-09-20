import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Virtual} from '../../../../screens/virtual';

export type HomeNavigatorParamList = {
  [NavigationKeys.virtaulScreen]: undefined;
};

const VirtualStack = createNativeStackNavigator<HomeNavigatorParamList>();

const VirtualStackNavigator = () => {
  return (
    <VirtualStack.Navigator>
      <VirtualStack.Screen
        name={NavigationKeys.virtaulScreen}
        component={Virtual}
        options={{headerShown: false}}
      />
    </VirtualStack.Navigator>
  );
};

export default VirtualStackNavigator;
