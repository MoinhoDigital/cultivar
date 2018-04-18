import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SignUp from '../screens/SignUp'

const signupUserMutation = gql`
  mutation signupUserMutation($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
      email
    }
  }
`
const setCurrentUserMutation = gql`
  mutation setCurrentUserMutation($user: Object!) {
    setCurrentUser(currentUser: $user) @client {
      currentUser
    }
  }
`;

export default compose(
  graphql(signupUserMutation, { name: 'signupUserMutation' }),
  graphql(setCurrentUserMutation, { name: 'setCurrentUserMutation' })
)(SignUp);