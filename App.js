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
    <Stack.Navigator initialRouteName="ListView" screenOptions={{headerShown: true}}>
      <Stack.Screen name="ListView" component={ListView}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SignUp" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


