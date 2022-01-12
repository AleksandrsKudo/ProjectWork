import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground, Image} from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import Constants from 'expo-constants';

export default function HomeScreen({ navigation }) {
  const [isPrivate, showPass]=useState(true);
  return (
      <View style={styles.container}>
      <ImageBackground source={require('./assets/home-bg.png')} resizeMode="cover" style={styles.bgImage}>
      <Image source={require('./assets/logo.png')} resizeMode="cover" style={styles.logo}></Image>
        <Text style={styles.titleTextLarge}>Sign in</Text>
        <Text style={styles.inputTitleText}>Email</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0'} }}
          style={styles.inputStyle}
          placeholder={'my.name@email.com'}
        />
        <Text style={styles.inputTitleText}>Password</Text>
        <TextInput
          secureTextEntry={isPrivate}
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0'} }}
          right={<TextInput.Icon onPress={() =>{showPass(prev=>!prev)}} name={isPrivate ? 'eye' : 'eye-off'} mode="outlined" color="#548FBA"/>}
          style={styles.inputStyle}
          placeholder={'••••••••'}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('Sign Up');
          }}>
          <Text style={styles.titleSubtextSmall}>Forgot password</Text>
        </Pressable>
        <Pressable
          style={styles.buttonSignIn}
          onPress={() => {
            navigation.navigate('List view');
          }}>
          <Text style={styles.buttonTextLight}>Sign in</Text>
        </Pressable>
        <Pressable
          style={styles.buttonSignUp}
          onPress={() => {
            navigation.navigate('Sign Up');
          }}>
          <Text style={styles.buttonTextDark}>Sign up</Text>
        </Pressable>
        <Pressable
          style={styles.buttonOffline}
          onPress={() => {
            navigation.navigate('List View');
          }}>
          <Text style={styles.buttonTextDark}>Offline</Text>
        </Pressable>
        </ImageBackground>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  bgImage: {
    padding: '6%',
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
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
  buttonTextDark: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
    position: 'relative',
    top: '25%',
    textAlign: 'center',
    color: '#548FBA',
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
  buttonSignUp: {
    backgroundColor: '#FFFFFF',
    borderRadius: 45,
    width: 122,
    height: 37,
    marginTop: '20%',
    top: 37,
  },
  buttonOffline: {
    backgroundColor: '#FFFFFF',
    borderRadius: 45,
    width: 122,
    height: 37,
    marginLeft: 'auto',
  },
  titleTextLarge: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    letterSpacing: 5,
    width: '100%',
    marginBottom: '10%',
    color: '#548FBA',
  },
  titleSubtextSmall: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'left',
    color: '#929292',
  }
});
