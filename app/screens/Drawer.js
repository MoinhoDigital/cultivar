import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";

export default class Drawer extends Component {
  render() { 
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title="John Doe">
          <View
            style={{
              backgroundColor: "#bcbec1",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: "center",
              marginBottom: 20
            }}
          >
            <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
          </View>
          <Button title="Guia de cultivo" onPress={() => this.props.navigation.navigate('Guide')} /> 
          <Button title="Que planta é essa? " onPress={() => this.props.navigation.navigate('WhatPlant')} />
          <Button
            backgroundColor="#03A9F4"
            title="SIGN OUT"
            onPress={() => onSignOut().then(() => console.log(this.props.navigation)).then(() => this.props.navigation.navigate("SignedOut"))}
          />
        </Card>
      </View>
    )
  }
};
