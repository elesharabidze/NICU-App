import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackContainer from '../RootStack';
import {RootStackParamList} from '../types';
import navigationRef from '../../utils/navigationRef';
import {
  DefaultNavigationOptions,
  onStateChange as StateChange,
} from '../config';

const AppStack = createStackNavigator<RootStackParamList & ParamListBase>();

const StackNavigationContainer = () => {
  const routeNameRef = useRef('');

  const onReady = () => {
    routeNameRef.current =
      navigationRef?.current?.getCurrentRoute()?.name || '';
  };
  const onStateChange = () => StateChange(routeNameRef);

  return (
    <View style={styles.wrapper}>
      <NavigationContainer
        onReady={onReady}
        onStateChange={onStateChange}
        ref={navigationRef}>
        <AppStack.Navigator
          screenOptions={{
            ...DefaultNavigationOptions,
          }}>
          <AppStack.Screen
            name="AppRoot"
            component={RootStackContainer}
            options={{
              headerShown: false,
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default StackNavigationContainer;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
