import React, { useState } from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import SignUPScreen from './src/components/SignUPScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;