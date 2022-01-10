import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Appbar, List, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

import DdMenu from './dd-menu';

export default function ListView({ navigation }) {
  const [showDD, setShowDD] = React.useState(false)

  return (
    <View>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => { showDD ? <DdMenu /> : null }} />
    </Appbar.Header>
    <Searchbar placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({

});
