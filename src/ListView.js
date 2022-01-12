import * as React from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Button, Image } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import objects from "./data.json"; // Data file for flatlist

import ball from "./assets/ball.jpeg";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

import DdMenu from './dd-menu';

export default function ListView({ navigation }) {
  const [showDD, setShowDD] = React.useState(false)

  const [objectData, setObjectData] = React.useState(objects);
  const ItemView = ({item}) => { return (
      <View>
        <Text onPress={() => onItemClick(item)}>{item.name}, atrašanās vieta: {item.location}</Text>
        <Image style={styles.img} source={ball}/>
      </View>
  )}

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  const onItemClick = (item) => {
    alert('Objekts: '+item.name+', atrašanās vieta: '+item.location);
  }

  const addElement = () => {
    alert("Šeit pievieno jaunu ierakstu")
  }

  return (
    <View>
      <Appbar.Header theme={{ colors: { primary: '#3E658A'} }}>
        <Appbar.Content title="Item list" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => { showDD ? <DdMenu /> : null }} />
      </Appbar.Header>
      <Searchbar placeholder="Search" />
      <Button
        title="Pievienot jaunu ierakstu"
        onPress={addElement}
      />
      <FlatList
        ItemSeparatorComponent={ItemSeparatorView}
        keyExtractor = {item => item.id}  
        data={objectData}
        renderItem = {ItemView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50
  }
});
