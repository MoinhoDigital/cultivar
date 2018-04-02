import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  Button
} from 'react-native';
import FacebookLogin from '../containers/FacebookLogin'

type Props = {};
export default class RegisterScreen extends Component<Props> {
  render() { 
    return (
      <View> 
        <Text>Register screen</Text> 
        <FacebookLogin/>
      </View>
    );
  }
}
