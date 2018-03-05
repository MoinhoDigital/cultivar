import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  Button
} from 'react-native';
import FacebookLoginButton from '../components/FacebookLoginButton'

type Props = {};
export default class LoginScreen extends Component<Props> {
  render() { 
    return (
      <View> 
        <Text>Login screen</Text> 
        <FacebookLoginButton/> 
      </View>
    );
  }
}
