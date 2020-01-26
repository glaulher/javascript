import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',

    headerTitleAlign: 'center',

    headerTitleStyle: {
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
    },

    headerStyle: {
      backgroundColor: '#DA552F',
    },
    headerTintColor: '#FFF',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao React-native!</Text>
        <View style={styles.box}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: '#f00',
  },
});
