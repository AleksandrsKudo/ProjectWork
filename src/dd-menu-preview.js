import React, { useState } from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import { List } from 'react-native-paper';
import Constants from 'expo-constants';

export default function DdMenu({ navigation }) {
  return (
    <View style={styles.ddBackground}>
    <List.Section style={styles.ddSelect}>
        <List.Item
        title="Edit item"
        left={props => <List.Icon {...props} icon="pencil-box-multiple" />}
        onPress={() => {navigation.navigate('Editor View');}}
        />
        <List.Item
        title="Delete item"
        left={props => <List.Icon {...props} icon="delete" />}
        onPress={() => {}}
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
    margin: 0,
    flex: 1,
    width: '100%',
  },
});
