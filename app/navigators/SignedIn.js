/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Dashboard from '../screens/Dashboard';
import Guide from '../screens/Guide';
import Catalog from '../screens/Catalog';
import WhatPlant from '../screens/WhatPlant';
import Drawer from '../screens/Drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerNavigator, DrawerItems, TabNavigator, TabBarBottom } from 'react-navigation';

const DashboardStack = TabNavigator({
  Dashboard: {
    screen: Dashboard, 
  },
  Guide: {
    screen: Guide, 
  },
  Catalog: {
    screen: Catalog,
  },
  WhatPlant: {
    screen: WhatPlant,
  },
},
{
  initialRouteName: 'Dashboard',

  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Dashboard') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Guide') {
        iconName = `ios-book${focused ? '' : '-outline'}`;
      } else if (routeName === 'Catalog') {
        iconName = `ios-list${focused ? '' : '-outline'}`;
      } else if (routeName === 'WhatPlant') {
        iconName = `ios-camera${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,

});

export default RootStack = DrawerNavigator({
  DashboardStack: {
    screen: DashboardStack, 
  },
},
{
  initialRouteName: 'DashboardStack',
  contentComponent: (props) => <Drawer navigation={props.navigation}/>
});
