import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WhatPlantScreen from '../screens/WhatPlantScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import { TabNavigator, TabBarBottom } from 'react-navigation';
 
const LoginStack = TabNavigator({
  Login: {
    name: 'Entrar',
    screen: LoginScreen, 
  },
  Register: {
    screen: RegisterScreen, 
  },
},
{
  initialRouteName: 'Login',

  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Login') {
        iconName = 'login';
      } else if (routeName === 'Register') {
        iconName = 'add-user';
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Entypo name={iconName} size={25} color={tintColor} />; 
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }, 
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: false,

});

type Props = {};
export default class LoginNavigator extends Component<Props> {
  render() {
    return ( 
      <LoginStack/>         
    );
  }
}
