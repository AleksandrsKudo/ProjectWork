import React, { useState } from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import { List } from 'react-native-paper';
import Constants from 'expo-constants';


export default function DdMenu({ navigation }) {

  return (
    <View>
    <List.Section style={styles.ddSelect}>
        <List.Item
        style={styles.ddItem}
        title="Create new item"
        left={props => <List.Icon {...props} icon="plus-box" />}
        onPress={() => {
            navigation.navigate('Editor');
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
            navigation.navigate('Sign Up');
          }}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  ddSelect: {
    backgroundColor: '#FFFFFF',
  },
  ddItem: {
    color: '#FFFFFF',
    padding: 0,
  }
});
