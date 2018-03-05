import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
// import Navigator from '../routers/Navigator'
// import LoginNavigator from '../routers/LoginNavigator'
import AddPlant from '../containers/AddPlant'
import VisiblePlants from '../containers/VisiblePlants'

// const Greeting = (props) => {
//   if (props.isLoggedIn) {
//     console.log("User logged in")
//     return <Navigator/>        
//   } 
//   return <LoginNavigator/>  
// }

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <AddPlant />
        <VisiblePlants />    
        {/*<Greeting isLoggedIn={false}/>*/}
      </View>
    );
  }
}
