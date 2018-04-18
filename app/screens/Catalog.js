import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button
} from 'react-native';
import PlantList from '../components/PlantList';

export default class WhatPlant extends Component {
  static navigationOptions = {
    title: 'Catálogo de plantas',
  };
  render() {
    return (
      <View>
      	<Text>Catálogo de plantas</Text> 
        <PlantList />  
      </View>
    );
  }
}
