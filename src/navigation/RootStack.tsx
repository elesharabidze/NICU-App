import React from 'react';
import Onboarding from '../screens/onboarding/Onboarding';
import DashboardTab from './DashboardTab';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParamList} from './types';

const RootStack = createStackNavigator<AppStackParamList>();

const RootStackContainer = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'push',
      }}>
      <RootStack.Group>
        <RootStack.Screen name="dashboardTab" component={DashboardTab} />
        <RootStack.Screen name="onboarding" component={Onboarding} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackContainer;
