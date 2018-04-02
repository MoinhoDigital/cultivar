import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import Navigator from './app/routers/Navigator'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigator/>
    );
  }
}
