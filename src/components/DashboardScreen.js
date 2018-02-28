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
export default class DashboardScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: "yrdyr",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
      />
    ),
  }  

  render() { 
    return (
      <View> 
        <Text>Dashboard View</Text>
        <Button title="Guia de cultivko" onPress={() => this.props.navigation.navigate('Guide')} />
        <Button title="Que planta é essa? " onPress={() => this.props.navigation.navigate('WhatPlant')} />
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
