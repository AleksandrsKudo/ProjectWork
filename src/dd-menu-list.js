import React, { useState } from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import { List } from 'react-native-paper';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

export default function DdMenu({ navigation }) {
  const nav = useNavigation();

  return (
    <View style={{position: 'absolute', width: '100%'}}>
    <List.Section style={styles.ddSelect}>
        <List.Item
        title="Create new item"
        left={props => <List.Icon {...props} icon="plus-box" />}
        onPress={() => {nav.navigate('Editor');}}
        />
        <List.Item
        title="Filter items"
        left={props => <List.Icon {...props} icon="text-box-search" />}
        />
        <List.Item
        title="Sing out"
        left={props => <List.Icon {...props} icon="close-box" />}
        onPress={() => {nav.navigate('Sign Up');}}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  ddSelect: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  }
});
