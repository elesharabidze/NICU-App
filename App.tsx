import React from 'react';
import StackNavigationContainer from './src/navigation/stacks';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StackNavigationContainer />
    </SafeAreaProvider>
  );
};

export default App;
