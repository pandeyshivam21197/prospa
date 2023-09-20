import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon, icons} from '../../../components/atoms/Icon';
import {NavigationKeys} from '../../constants';
import HomeStackNavigator from './homeStackNavigator';
import BusinessStackNavigator from './businessStackNavigator';
import PaymentStackNavigator from './payementStackNavigator';
import InvoiceStackNavigator from './invoiceStackNavigator';
import VirtualStackNavigator from './virtualStackNavigator';

export type BottomTabNavigatorParamList = {
  [NavigationKeys.homeStack]: undefined;
  [NavigationKeys.paymentStack]: undefined;
  [NavigationKeys.invoiceStack]: undefined;
  [NavigationKeys.virtaulStack]: undefined;
  [NavigationKeys.businesstack]: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const tabOptions = (tabLabel: string, iconName: string) => ({
  tabBarIcon: ({color}: {color: string}) => (
    <Icon name={iconName} color={color} size={16} />
  ),
  tabBarShowLabel: true,
  tabBarLabel: tabLabel,
});

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FA4A84',
      }}>
      <BottomTab.Screen
        name={NavigationKeys.homeStack}
        component={HomeStackNavigator}
        options={tabOptions('Home', icons.homeTab)}
      />
      <BottomTab.Screen
        name={NavigationKeys.paymentStack}
        component={PaymentStackNavigator}
        options={tabOptions('Payments', icons.paymentTab)}
      />
      <BottomTab.Screen
        name={NavigationKeys.businesstack}
        component={BusinessStackNavigator}
        options={tabOptions('Business', icons.businessTab)}
      />
      <BottomTab.Screen
        name={NavigationKeys.invoiceStack}
        component={InvoiceStackNavigator}
        options={tabOptions('Invoice', icons.invoiceTab)}
      />
      <BottomTab.Screen
        name={NavigationKeys.virtaulStack}
        component={VirtualStackNavigator}
        options={tabOptions('Virtual', icons.virtualTab)}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
