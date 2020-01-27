import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import api from '../services/api';

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

  state = {
    docs: [],
  };
  componentDidMount() {
    this.loadProducts();
  }
  // tem que ser função pra conseguir pegar o this.
  loadProducts = async () => {
    const response = await api.get('/products');
    const {docs} = response.data;
    this.setState({docs});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao React-native!</Text>
        {this.state.docs.map(product => (
          <Text key={product._id}>{product.title}</Text>
        ))}
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
});
