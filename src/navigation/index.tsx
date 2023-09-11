import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './appStackNavigator';

const RootNavigator = () => {
  const isLoggedIn = useSelector
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
