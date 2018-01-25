/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * source={require('./img/Wallpaper.jpg')}
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Video from 'react-native-video';
/*

        <Video
            source={require('./video/Orchestra.mp4')}
            />
*/

export default class Proto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Fuck Off!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Proto', () => Proto);
