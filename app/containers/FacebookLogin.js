import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import FacebookLoginButton from '../components/FacebookLoginButton'

const AUTHENTICATE_FACEBOOK_USER = gql`
  mutation AuthenticateUserMutation($facebookToken: String!) {
    authenticateUser(facebookToken: $facebookToken) {
      token
    }
  }
`

export default graphql(AUTHENTICATE_FACEBOOK_USER, { name: 'authenticateUserMutation' })(FacebookLoginButton)