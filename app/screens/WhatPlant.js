import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button
} from 'react-native';

export default class WhatPlant extends Component {
  static navigationOptions = {
    title: 'Que planta é essa?',
  };
  render() {
    return (
      <View>
      	<Text>Que planta é essa?</Text> 
      	<Button title="Inicio" onPress={() => this.props.navigation.navigate('Dashboard')} />
      </View>
    );
  }
}
