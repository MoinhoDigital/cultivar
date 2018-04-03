import React, { Component } from 'react';
import {
  Text,
  View,  
  Button 
} from 'react-native'; 
import { onSignOut } from "../auth";

export default class Dashboard extends Component {
  render() {  
    return (
      <View> 
        <br/> 
        <Button title="Menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
        <br/> 
        <Button title="Guia de cultivo" onPress={() => this.props.navigation.navigate('Guide')} />
        <br/> 
        <Button title="Catálogo de plantas" onPress={() => this.props.navigation.navigate('Catalog')} />
        <br/> 
        <Button title="Que planta é essa?" onPress={() => this.props.navigation.navigate('WhatPlant')} />
        <br/> 
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={() => onSignOut().then(() => console.log(this.props.navigation)).then(() => this.props.navigation.navigate("SignedOut"))}
        />
      </View>
    );
  }
}
