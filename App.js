import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
import ListView from './src/ListView';
import Signup from './src/Signup';
import Editor from './src/Editor';
import Preview from './src/Preview';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="List view" component={ListView}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Sign Up" component={Signup}/>
        <Stack.Screen name="Editor" component={Editor}/>
        <Stack.Screen name="Preview" component={Preview}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
