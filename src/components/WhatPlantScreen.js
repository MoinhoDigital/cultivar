/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button
} from 'react-native';

type Props = {};
export default class WhatPlantScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Que planta é essa?',
  };
  render() {
    return ( 
      <View>
      	<Text>Que planta é essa?</Text> 
      	<Button title="Início" onPress={() => this.props.navigation.navigate('Dashboard')} />
      </View>
    );
  }
}
