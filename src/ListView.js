import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Image, Pressable, Dimensions  } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import objects from "./data.json"; // Data file for flatlist

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

//import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import DdMenu from './dd-menu-list';
export default function ListView({ navigation }) {
  const [ddVisible, setDDVisible] = useState(false);
  const [searchVisible, setsearchVisible] = useState(false);
  const [objectData, setObjectData] = React.useState(objects);

  const ItemView = ({item}) => { return (
      <Pressable style={styles.listItemContainer}
      onPress={() => {navigation.navigate('Preview', {
            tileText: item.name,
            descText: item.description,
            locationText: item.location,
            dateText: item.date,
            imgsrc: item.imgsrc,
          });}}>
        <Image style={styles.listImg} source={{uri: item.imgsrc}}/>
        <View style={styles.listDevider}/>
        <Text style={styles.listName}>{item.name}</Text>
        <Text style={styles.listLocation}>{item.location}</Text>
        <Text style={styles.listDate}>{item.date}</Text>
      </Pressable>
  )}

  const onItemClick = (item) => {
    alert('Objekts: '+item.name+', atrašanās vieta: '+item.location+', datums: '+item.date);
  }


  return (
    <View>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}
      style={styles.menuBar}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() =>{setsearchVisible(searchVisible=>!searchVisible)}} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}} />
    </Appbar.Header>
    <View style={{zIndex: 2}}>
    {searchVisible && <Searchbar placeholder="Search" onSubmitEditing={() =>{setsearchVisible(searchVisible=>!searchVisible)}}/>}
    {ddVisible && <DdMenu/>}
    </View>
    {ddVisible && <Pressable style={styles.bgShadowView} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}}/>}
    <FlatList
      keyExtractor = {item => item.id}
      renderItem = {ItemView}
      data={objectData}
    />
    </View>
  );
  
}

const styles = StyleSheet.create({
  listImg: {
    width: 90,
    height: 110,
  },
  listDevider: {
    backgroundColor: '#548FBA',
    width: 2,
    marginHorizontal: 10,
  },
  listName: {
    color: '#548FBA',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 22,
    position: 'absolute',
    left: 110,
  },
  listLocation: {
    color: '#3E658A',
    fontFamily: 'Lato',
    fontSize: 16,
    position: 'absolute',
    left: 110,
    top: 24,
  },
  listDate: {
    color: '#3E658A',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'italic',
    position: 'absolute',
    alignSelf: "flex-end",
    right: 0,
  },
  listItemContainer: {
    margin: 20,
    flex: 1,
    flexDirection:'row',
  },
  menuBar: {
    padding: 0,
    margin: 0,
    zIndex: 2,
  },
  bgShadowView:{
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    zIndex: 1,
  }
});
