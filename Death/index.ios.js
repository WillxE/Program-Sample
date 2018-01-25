/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  Image,
  Button
} from 'react-native';
var alertMessage = null
export default class Death extends Component {
  render() {
    return (
      <Image source={require('./img/Wallpaper.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./img/005.png')} style={styles.icon}></Image>
          <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <TextInput style={styles.instructions} placeholder={'Username'} 
            placeholderTextColor={'grey'}>
            </TextInput>
            <TextInput style={styles.instructions} placeholder={'Password'}
            placeholderTextColor={'grey'}>
            </TextInput>
            <Button onPress={onButtonPress}
              title="Login"
              color="orange"
              style={{fontSize: 100, color: 'green'}}
              styleDisabled={{color: 'red'}}
              accessibilityLabel="Learn more about purple"/>
              
          </View>
      </View>
      </Image>
    );
  }
}
const onButtonPress = () => {
  Alert.alert(
            'Alert Title',
            alertMessage,
            [
              {text: 'asdasdas', onPress: () => console.log('OK Pressed!')},
            ]
          );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 300,
    height: 300,
    margin: 5,
  },
  instructions: {
    height: 40,
    width: 300,
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  background: {
    flex: 1,
    width: null,
    height: null,
  }
});

AppRegistry.registerComponent('Death', () => Death);
