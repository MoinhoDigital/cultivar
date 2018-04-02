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
const FBSDK = require('react-native-fbsdk');
const {
  AccessToken
} = FBSDK; 


const facebookLoggedIn = (props) => {
    AccessToken.getCurrentAccessToken().then(
      async (data) => {
        console.log('accessToken', data.accessToken)
        console.log('props', props)
        // alert(data.accessToken.toString()) 
        // const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken: data.accessToken.toString() }})
        // const facebookInfo = graphcoolResponse.data.authenticateUser
        // console.log('facebookInfo', facebookInfo)
        return true
      }
    )
    return false;
}

const Greeting = (props) => {
  if (facebookLoggedIn(props)) {
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
