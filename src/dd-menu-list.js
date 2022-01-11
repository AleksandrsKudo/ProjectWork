import React, { useState } from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import { List } from 'react-native-paper';
import Constants from 'expo-constants';

export default function DdMenu({ navigation }) {
  return (
    <View style={styles.ddBackground}>
    <List.Section style={styles.ddSelect}>
        <List.Item
        title="Create new item"
        left={props => <List.Icon {...props} icon="plus-box" />}
        onPress={() => {navigation.navigate('Editor View');}}
        />
        <List.Item
        title="Filter items"
        left={props => <List.Icon {...props} icon="text-box-search" />}
        />
        <List.Item
        title="Sing out"
        left={props => <List.Icon {...props} icon="close-box" />}
        onPress={() => {navigation.navigate('Sign Up');}}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  ddSelect: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
  ddBackground: {
    backgroundColor: '#FFFFFF',
  }
});
