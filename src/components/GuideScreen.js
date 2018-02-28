/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View
} from 'react-native';

type Props = {};
export default class GuideScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Guia Básico de cultivo',
  };
  render() {
    return (
      <View><Text>Guia de cultivo</Text></View>
    );
  }
}
