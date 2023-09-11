import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './appStackNavigator';
import {useAppSelector} from '../reduxStore/hooks';
import AuthStackNavigator from './authStackNavigator';

const RootNavigator = () => {
  const isLoggedIn = useAppSelector(state => state.singInReducer.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
