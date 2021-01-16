import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/Shared/Navigation';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}
