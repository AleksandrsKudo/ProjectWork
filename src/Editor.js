import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Image, Pressable, TextInput  } from 'react-native';
import { Appbar, List,} from 'react-native-paper';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DdMenu from './dd-menu-preview';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

// Removed due to it causing errors on android.
// const [desc, setDesc] = useState('');
// <Text style={styles.inputTitleText}>{desc.length}/200</Text>

export default function Preview({ route, navigation }) {
  const [count, setCount] = React.useState(0);
  
  
  return (
    <View>
    <Appbar.Header
      style={styles.menuBar}
      theme={{ colors: { primary: '#3E658A'} }}>
      <Appbar.Content title='Editor' />
      <Appbar.Action icon="arrow-left" onPress={() =>navigation.goBack()} />
      <Appbar.Action icon='content-save' onPress={() =>{navigation.navigate('List View');}} />
    </Appbar.Header>
    <View style={{zIndex: 2}}>
    </View>
      <View style={styles.container}>
        <Pressable style={styles.editUpload} icon="add-a-photo">
          <Image style={styles.editUploadImg} source={require('./assets/file-upload.png')}/>
        </Pressable>
        <Text style={styles.inputTitleText}>Item name</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0'} }}
          style={styles.inputStyle}
          placeholder={'Mixer'}
        />
        <Text style={styles.inputTitleText}>Item location</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0'} }}
          style={styles.inputStyle}
          placeholder={'Kitchen'}
        />
        <Text style={styles.inputTitleText}>Short description</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0'} }}
          style={styles.inputStyle}
          placeholder={'The item is for...'}
        />
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('List View');
          }}>
          <Text style={styles.buttonTextLight}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editUploadImg: {
    width: 70,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    color: '#ffffff'
  },
  editUpload: {
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#d4d4d4',
    borderColor: '#548FBA',
    borderBottomWidth: 2, 
    borderRightWidth: 2,
    borderRadius: 25,
    marginBottom: 30,
  },
  menuBar: {
    padding: 0,
    margin: 0,
    zIndex: 2,
  },
  container: {
    margin: 20,
  },
  inputStyle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 15,
    borderBottomWidth: 2, 
    borderBottomColor:'#1C6EA4',
    backgroundColor: 'transparent',
    height: 35,
  },
  inputTitleText: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    letterSpacing: 2,
    textAlign: 'left',
    color: '#548FBA',
  },
  buttonStyle: {
    backgroundColor: '#3E658A',
    borderRadius: 45,
    width: 192,
    height: 37,
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonTextLight: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
    position: 'relative',
    top: '25%',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
