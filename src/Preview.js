import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Image, Pressable, Dimensions  } from 'react-native';
import { Appbar, List,} from 'react-native-paper';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DdMenu from './dd-menu-preview';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Preview({ route, navigation }) {
  const [ddVisible, setDDVisible] = useState(false);
  const {tileText, descText, locationText, dateText, imgsrc} = route.params;
  
  return (
    <View>
    <Appbar.Header
      style={styles.menuBar}
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title={tileText} />
      <Appbar.Action icon="arrow-left" onPress={() =>navigation.goBack()} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}} />
    </Appbar.Header>
    <View style={{zIndex: 2}}>
    {ddVisible && <DdMenu/>}
    </View>
    {ddVisible && <Pressable style={styles.bgShadowView} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}}/>}
      <View style={styles.container}>
        <Image style={styles.prevImage} source={{uri: imgsrc}}/>
        <Text style={styles.textName}>{tileText}</Text>
        <Text style={styles.textLocation}>{locationText}</Text>
        <View style={styles.listDevider}/>
        <Text style={styles.textStyle}>{descText}</Text>
        <Text style={styles.textDate}>{dateText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prevImage: {
    width: '100%',
    height: 200,
  },
  listDevider: {
    backgroundColor: '#548FBA',
    height: 2,
    marginBottom: 5,
  },
  menuBar: {
    padding: 0,
    margin: 0,
    zIndex: 2,
  },
  container: {
    margin: 20,
  },
  textStyle: {
    marginTop: 10,
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: '#3E658A',
    fontSize: 16,
    hight: 100,
  },
  textName: {
    marginTop: 5,
    color: '#548FBA',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 32,
  },
  textLocation: {
    marginBottom: 5,
    color: '#548FBA',
    fontFamily: 'Lato',
    fontSize: 27,
  },
  textDate: {
    color: '#3E658A',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'italic',
    alignSelf: "flex-end",
    marginTop: 10,
  },
  bgShadowView:{
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    zIndex: 1,
  }
});
