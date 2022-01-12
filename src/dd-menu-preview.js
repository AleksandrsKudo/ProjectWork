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
        title="Edit item"
        left={props => <List.Icon {...props} icon="pencil-box-multiple" />}
        onPress={() => {nav.navigate('Editor');}}
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
  }
});
