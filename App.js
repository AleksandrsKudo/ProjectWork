import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
import ListView from './src/ListView';
import Signup from './src/Signup';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="List View" component={ListView}/>
      <Stack.Screen name="Sign Up" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


