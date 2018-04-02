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
import DashboardScreen from '../screens/DashboardScreen';
import GuideScreen from '../screens/GuideScreen';
import WhatPlantScreen from '../screens/WhatPlantScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerNavigator, DrawerItems, TabNavigator, TabBarBottom } from 'react-navigation';
 
const DashboardStack = TabNavigator({
  Dashboard: {
    screen: DashboardScreen, 
  },
  Guide: {
    screen: GuideScreen, 
  },
  WhatPlant: {
    screen: WhatPlantScreen,
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
      } else if (routeName === 'WhatPlant') {
        iconName = `ios-camera${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }, 
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,

});

const RootStack = DrawerNavigator({
  DashboardStack: {
    screen: DashboardStack, 
  },
},
{
  initialRouteName: 'DashboardStack',
  contentComponent: (props) => (
    <View >
      <ScrollView>
        <Text>Drawer View</Text>
        
        <DrawerItems
          {...props}
          getLabel = {(scene) => (
            <View> 
              <Text>{props.getLabel(scene)}</Text> 
              <Text>{props.getLabel(scene)}</Text> 
            </View>
          )}
        /> 
        </ScrollView>
      </View>
    )
});

type Props = {};
export default class Navigator extends Component<Props> {
  render() {
    return ( 
      <RootStack/>        
    );
  }
}
