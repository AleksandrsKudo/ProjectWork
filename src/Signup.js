import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import Constants from 'expo-constants';

export default function Signup({ navigation }) {
  const [isPrivate1, showPass1]=useState(true);
  const [isPrivate2, showPass2]=useState(true);
  return (
      <View style={styles.container}>
        <Text style={styles.titleTextLarge}>Sign up</Text>
        <Text style={styles.inputTitleText}>Name</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          style={styles.inputStyle}
          placeholder={'June'}
        />
        <Text style={styles.inputTitleText}>Surname</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          style={styles.inputStyle}
          placeholder={'Annita'}
        />
        <Text style={styles.inputTitleText}>Email</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          style={styles.inputStyle}
          placeholder={'my.name@email.com'}
        />
        <Text style={styles.inputTitleText}>Password</Text>
        <TextInput
          secureTextEntry={isPrivate1}
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          right={<TextInput.Icon onPress={() =>{showPass1(prev=>!prev)}} name={isPrivate1 ? 'eye' : 'eye-off'} mode="outlined" color="#548FBA"/>}
          style={styles.inputStyle}
          placeholder={'••••••••'}
        />
        <Text style={styles.inputTitleText}>Repeat password</Text>
        <TextInput
          secureTextEntry={isPrivate2}
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          right={<TextInput.Icon onPress={() =>{showPass2(prev=>!prev)}} name={isPrivate2 ? 'eye' : 'eye-off'} mode="outlined" color="#548FBA"/>}
          style={styles.inputStyle}
          placeholder={'••••••••'}
        />
        <Pressable
          style={styles.buttonSignIn}
          onPress={() => {
            navigation.navigate('List View');
          }}>
        <Text style={styles.buttonTextLight}>Sign up</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '6%',
    flex: 1,
    justifyContent: "center",
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
  buttonSignIn: {
    backgroundColor: '#3E658A',
    borderRadius: 45,
    width: 192,
    height: 37,
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleTextLarge: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    letterSpacing: 5,
    width: '100%',
    marginBottom: 60,
    color: '#548FBA',
  }
});
