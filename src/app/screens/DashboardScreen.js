import React, { Component } from 'react';
import {
  Text,
  View,  
  Button 
} from 'react-native'; 
import AddPlant from '../containers/AddPlant'
import VisiblePlants from '../containers/VisiblePlants'


export default class DashboardScreen extends Component {
  render() {  
    return (
      <View>
        <Text>Dashboard View</Text>
        <Text>Plantas</Text>
        <AddPlant /> 
        <VisiblePlants />     
        <Button title="Guia de cultivo" onPress={() => this.props.navigation.navigate('DrawerOpen')} /> 
        <Button title="Que planta é essa? " onPress={() => this.props.navigation.navigate('WhatPlant')} />
      </View>
    ); 
  }
}
