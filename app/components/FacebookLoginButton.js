import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import {
  View
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;   


const facebookLoggedIn = (props) => {
    AccessToken.getCurrentAccessToken().then(
      async (data) => {
        console.log('accessToken', data.accessToken)
        console.log('props', props)
        const graphcoolResponse = await props.authenticateUserMutation({variables: { facebookToken: data.accessToken.toString() }})
        const facebookInfo = graphcoolResponse
        console.log('facebookInfo', facebookInfo)
        return true
      }
    )
    return false;
}

export default class FacebookLoginButton extends Component {
  render() {
    return (
      <View>
        { facebookLoggedIn(this.props) } 
        <LoginButton
          publishPermissions={["email","public_profile","user_location","publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  async (data) => {
                    console.log('accessToken', data.accessToken)
                    console.log('props', this.props)
                    alert(data.accessToken.toString()) 
                    const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken: data.accessToken.toString() }})
                    const facebookData = graphcoolResponse.data
                    console.log('facebookData', facebookData)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
};