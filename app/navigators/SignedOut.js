import React, { Component } from 'react';
import { Platform, StatusBar } from "react-native";
import { TabNavigator } from 'react-navigation';
import SignUp from "../containers/SignUp";
import SignIn from "../screens/SignIn";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};


export default SignedOut = TabNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  }
});

