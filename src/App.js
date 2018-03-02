/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import Navigator from './route/Navigator'
import LoginNavigator from './route/LoginNavigator'

const Greeting = (props) => {
  if (props.isLoggedIn) {
    console.log("User logged in")
    return <Navigator/>       
  } 
  return <LoginNavigator/>  
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (   
      <Greeting isLoggedIn={false}/>
    );
  }
}
