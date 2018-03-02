import React, { Component } from 'react';
import {
  Text,
  View,  
  Button 
} from 'react-native'; 

export default class DashboardScreen extends Component {
  render() {  
    return (
      <View>
        <Text>Dashboard View</Text>
        <Button title="Guia de cultivo" onPress={() => this.props.navigation.navigate('DrawerOpen')} /> 
        <Button title="Que planta é essa? " onPress={() => this.props.navigation.navigate('WhatPlant')} />
      </View>
    );
  }
}
