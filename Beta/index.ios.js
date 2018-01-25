/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import Video from 'react-native-video';

export default class Beta extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Video source={require('./video/Orchestra.mp4')}
        ref={(ref) => {
         this.player = ref
       }}                             // Store reference 
       resizeMode={'cover'}
       repeat={true}
       style={styles.backgroundVideo}/>
       <Image source={require('./img/005.png')} style={styles.logo}/>
       <TextInput placeholder={'Username'} style={styles.input}/>
       <TextInput placeholder={'Password'} style={styles.input}/>
       <Button onPress={onButtonPress} title='Sign In'
                style={styles.button}
                color="grey"       
        />
      </View>
    );
  }
}
 
// Later on in your styles.. 
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    width: null,
    height: null,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    width: 250,
    height: 250,
  },
  input: {
    backgroundColor: 'transparent',
    height: 40,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    margin:10
  },
  button: {
    width: 300,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Beta', () => Beta);
