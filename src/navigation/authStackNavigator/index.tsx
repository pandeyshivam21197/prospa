import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../constants';
import {SignIn} from '../../screens/singIn';

export type AuthNavigatorParamList = {
  [NavigationKeys.singInScreen]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationKeys.singInScreen}
        component={SignIn}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
