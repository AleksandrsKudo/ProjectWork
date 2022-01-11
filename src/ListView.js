import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Button } from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import objects from "./data.json";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

import DdMenu from './dd-menu';

export default function ListView({ navigation }) {
  const [showDD, setShowDD] = React.useState(false)
  const [initialElements, changeEl] = useState([
    { id: 1, name: "Zeķes"},
    { id: 2, name: "Bumba"}
  ]);

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(2);

  const addElement = () => {
    var newArray = [...initialElements , {id : idx, text: "Object " + (idx+1) }];
    incr(idx + 1);
    console.log(initialElements.length);
    setExampleState(newArray);
    changeEl(newArray);
  }

  console.log(objects);
  console.log("End of JSON file");
  
  return (
    <View>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => { showDD ? <DdMenu /> : null }} />
    </Appbar.Header>
    <Searchbar placeholder="Search" />
    <Button
          title="Pievienot jaunu ierakstu"
          onPress={addElement} />
    <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
    </View>
  );
}

const styles = StyleSheet.create({

});
