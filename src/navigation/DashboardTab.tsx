import React, {useEffect} from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {BackHandler} from 'react-native';
import {AppStackParamList, DashboardBottomTabParamList} from './types';
import Dashboard from '../screens/Dashboard/Dashboard';
import BottomTabBar from './stacks/components/BottomTabBar';

type IDashboardTabProps = BottomTabScreenProps<
  AppStackParamList,
  'dashboardTab'
>;

const DashbaordTabNav = createBottomTabNavigator<DashboardBottomTabParamList>();

const DashboardTab = ({navigation}: IDashboardTabProps) => {
  useEffect(() => {
    const handler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate('dashboardTab', {
        screen: 'dashboard',
      });
      return true;
    });
    return () => {
      handler.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DashbaordTabNav.Navigator
        tabBar={props => <BottomTabBar {...props} />}
        initialRouteName="dashboard">
        <DashbaordTabNav.Screen name="dashboard" component={Dashboard} />
      </DashbaordTabNav.Navigator>
    </>
  );
};

export default DashboardTab;
