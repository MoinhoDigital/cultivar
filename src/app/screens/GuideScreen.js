import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View
} from 'react-native';
import PlantList from '../containers/PlantListWithData';

type Props = {};
export default class GuideScreen extends Component<Props> {
  render() {
    return (
      <View>
      	<Text>Guia de cultivo</Text>
        <PlantList />  
      </View>
    );
  } 
}
