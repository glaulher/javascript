import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
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

  renderItem = ({item}) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
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
