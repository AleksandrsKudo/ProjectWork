import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList} from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function ListView({ navigation }) {
  const [ddList, ddToggle]=useState(false);
  
  return (
    <View>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{ddToggle(prev=>!prev)}} />
    </Appbar.Header>
    <List.Section style={styles.ddSelect} display={ddList ? 'none' : 'inline'}>
        <List.Item
        style={styles.ddItem}
        title="Create new item"
        left={props => <List.Icon {...props} icon="plus-box" />}
        onPress={() => {
            navigation.navigate('Signup');
          }}
        />
        <List.Item
        style={styles.ddItem}
        title="Filter items"
        left={props => <List.Icon {...props} icon="text-box-search" />}
        />
        <List.Item
        style={styles.ddItem}
        title="Sing out"
        left={props => <List.Icon {...props} icon="close-box" />}
        onPress={() => {
            navigation.navigate('Signup');
          }}
        />
      </List.Section>
    <Searchbar placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  ddSelect: {
    display: 'inline',
    backgroundColor: '#FFFFFF',
  },
  ddItem: {
    color: '#FFFFFF',
    padding: 0,
  }
});
