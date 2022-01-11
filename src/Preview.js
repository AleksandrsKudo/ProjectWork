import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, Image, FlatList } from 'react-native';
import { Appbar, List,} from 'react-native-paper';
import Constants from 'expo-constants';

import DdMenu from './dd-menu-preview';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Preview({ navigation }) {
  const [ddVisible, setDDVisible] = useState(true);
  const tileText = 'Title goes here';
  const descText = 'All of these items can be stored in the refrigerator at least three weeks in advance. Some vegetables, and even some meats, will last over a week in the refrigerator. Stock up on them early to save time and headaches with last-minute shopping.';
  
  return (
    <View>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title={tileText} />
      <Appbar.Action icon="arrow-left" onPress={() =>navigation.goBack()} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}} />
    </Appbar.Header>
    {ddVisible && <DdMenu  />}
      <Text style={styles.textStyle}>
      <Image style={styles.tinyLogo} source={require('./assets/refrigerator.jpg')}/>
      {descText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 160,
    height: 199,
    float: 'left',
    marginRight: 15,
  },
  textStyle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: '#3E658A',
    fontSize: 16,
    hight: 100,
    padding: 15,
  },
});
