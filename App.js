import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
import ListView from './src/ListView';
import Signup from './src/Signup';
import Editor from './src/Editor';
import DdMenu from './src/dd-menu';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Stack.Screen name="List View" component={ListView}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Sign Up" component={Signup}/>
        <Stack.Screen name="Editor" component={Editor}/>
        <Stack.Screen name="DdMenu" component={DdMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


