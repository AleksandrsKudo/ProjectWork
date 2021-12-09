import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import Constants from 'expo-constants';

const image = { uri: './assets/background.png' };

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover">
      <View style={styles.container}>
        <Headline style={styles.titleTextLarge}>Sign up</Headline>
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
          secureTextEntry={true}
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          right={<TextInput.Icon name="eye" mode="outlined" color="#548FBA"/>}
          style={styles.inputStyle}
          placeholder={'••••••••'}
        />
        <Text style={styles.inputTitleText}>Repeat password</Text>
        <TextInput
          secureTextEntry={true}
          underlineColor={'transparent'}
          theme={{ colors: { primary: 'transparent', text: '#676767', placeholder: '#B0B0B0' } }}
          right={<TextInput.Icon name="eye" mode="outlined" color="#548FBA"/>}
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
  buttonSignIn: {
    background: '#3E658A',
    borderRadius: '45px',
    width: '192px',
    height: '37px',
    marginTop: '2.2em',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    paddingBottom: '1em',
    color: '#548FBA',
  },
});
