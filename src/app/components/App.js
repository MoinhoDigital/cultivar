import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import Navigator from '../routers/Navigator'
import LoginNavigator from '../routers/LoginNavigator'

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
      <Greeting isLoggedIn={true}/>
    );
  }
}
