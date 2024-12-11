import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      {state.routes.find(route => route.name === 'explore') && (
        <Pressable
          hitSlop={styles.hitSlop}
          style={[styles.pressableContainer]}
          onPress={() => {
            navigation.navigate('dashboard');
          }}>
          <Text>home</Text>
        </Pressable>
      )}
      {state.routes.find(route => route.name === 'dashboard') && (
        <Pressable hitSlop={styles.hitSlop} style={[styles.pressableContainer]}>
          <Text>home</Text>
        </Pressable>
      )}
      {state.routes.find(route => route.name === 'progress') && (
        <Pressable hitSlop={styles.hitSlop} style={[styles.pressableContainer]}>
          <Text>home</Text>
        </Pressable>
      )}
    </View>
  );
};

export default BottomTabBar;

const useStyles = () => {
  return StyleSheet.create({
    pressableContainer: {
      borderRadius: 100,
      padding: 8,
      marginBottom: 8,
    },
    activeBox: {
      borderRadius: 30,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 2,
    },
    wrapper: {
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
      height: 90,
    },
    hitSlop: {
      top: 25,
      bottom: 25,
      left: 25,
      right: 25,
    },
  });
};
