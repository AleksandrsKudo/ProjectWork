import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Button } from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

import DdMenu from './dd-menu';
import { Component } from 'react/cjs/react.production.min';

export default function ListView({ navigation }) {
  const [showDD, setShowDD] = React.useState(false)
  const [initialElements, changeEl] = useState([
    { id: "1", name: "Zeķes"},
    { id: "2", name: "Bumba"}
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

  return (
    <View>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => { showDD ? <DdMenu /> : null }} />
    </Appbar.Header>
    <Searchbar placeholder="Search" />
    <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
        <Button
          title="Add element"
          onPress={addElement} />
    </View>
  );
}

const styles = StyleSheet.create({

});
