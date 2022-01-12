import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Button } from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import objects from "./data.json"; // Data file for flatlist

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

import DdMenu from './dd-menu';
//import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export default function ListView({ navigation }) {
  const [showDD, setShowDD] = React.useState(false)

  const [objectData, setObjectData] = React.useState(objects);
  const ItemView = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.location}</Text>
      </View>
    )
  }
  const Item = ({name, location}) => (
    <View>
      <Text>{name}</Text>
      <Text>{location}</Text>
    </View>
  )

  const addElement = () => {
    alert("Šeit pievieno jaunu ierakstu")
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
    <Button
          title="Pievienot jaunu ierakstu"
          onPress={addElement} />
    <FlatList
            keyExtractor = {item => item.id}  
            data={objectData}
            renderItem = {ItemView}
    />
    </View>
  );
}

const styles = StyleSheet.create({

});
