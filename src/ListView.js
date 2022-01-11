import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

import DdMenu from './dd-menu-list';

export default function ListView({ navigation }) {
  const [ddVisible, setDDVisible] = useState(true);
  const [searchVisible, setsearchVisible] = useState(false);
  return (
    <View style={ddVisible ? styles.bgShadowView : null}>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }} style={styles.menuBar}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() =>{setsearchVisible(searchVisible=>!searchVisible)}} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}} />
    </Appbar.Header>
    {searchVisible && <Searchbar placeholder="Search" onSubmitEditing={() =>{setsearchVisible(searchVisible=>!searchVisible)}}/>}
    {ddVisible && <DdMenu  />}
    </View>
  );
  
}

const styles = StyleSheet.create({
  menuBar: {
    padding: 0,
    margin: 0,
  },
  bgShadowView:{
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
  }
});
