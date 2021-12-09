import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import Constants from 'expo-constants';

const image = { uri: './assets/background.png' };

export default function Signup({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover">
      <View style={styles.container}>
        <Headline style={styles.titleTextLarge}>Sign in</Headline>
        <Text style={styles.inputTitleText}>Email</Text>
        <TextInput
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          style={styles.inputStyle}
          placeholder={'my.name@email.com'}
        />
        <Text style={styles.inputTitleText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          right={<TextInput.Icon name="eye" mode="outlined" color="#548FBA"/>}
          style={styles.inputStyle}
          placeholder={'••••••••'}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('List View');
          }}>
          <Text style={styles.titleSubtextSmall}>Forgot password</Text>
        </Pressable>
        <Pressable
          style={styles.buttonSignIn}
          onPress={() => {
            navigation.navigate('List View');
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '2em',
    height: 100,
    flex:1,
  },
  inputStyle: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: '1.5vh',
    borderBottom: '2px solid #1C6EA4',
    width: 'auto',
    outline: 'none',
    backgroundColor: 'none',
    height: 'auto',
  },
  inputTitleText: {
    fontFamily: 'Lato',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '14px',
    letterSpacing: '0.04em',
    textAlign: 'left',
    color: '#548FBA',
  },
  buttonTextLight: {
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19px',
    margin: 'auto',
    color: '#FFFFFF',
  },
  buttonTextDark: {
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19px',
    margin: 'auto',
    color: '#548FBA',
  },
  buttonSignIn: {
    background: '#3E658A',
    borderRadius: '45px',
    width: '192px',
    height: '37px',
    marginTop: '2em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSignUp: {
    background: '#FFFFFF',
    borderRadius: '45px',
    width: '122px',
    height: '37px',
    marginTop: '5em',
    marginRight: 'auto',
    top: '37px',
    position: 'relative',
  },
  buttonOffline: {
    background: '#FFFFFF',
    borderRadius: '45px',
    width: '122px',
    height: '37px',
    marginLeft: 'auto',
    position: 'relative',
  },
  titleTextLarge: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '38px',
    textAlign: 'center',
    letterSpacing: '0.15em',
    position: 'relative',
    width: '100%',
    height: 'auto',
    paddingTop: '1.6em',
    paddingBottom: '1.6em',
    color: '#548FBA',
  },
  titleSubtextSmall: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '14px',
    textAlign: 'center',
    position: 'relative',
    height: 'auto',
    color: '#929292',
    marginRight: 'auto',
  }
});
