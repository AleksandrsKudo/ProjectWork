import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList} from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Preview({ navigation }) {
  
  return (
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{}} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({

});
