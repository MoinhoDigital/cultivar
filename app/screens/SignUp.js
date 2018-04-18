import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";


export default class SignUp extends Component {

  render() {
    const onSignUp = async () => { 
      console.log(this.props)
      const signedUpUser = await this.props.signupUserMutation({variables: { email: this.state.email, password: this.state.password }})
      console.log(this.props)
      const signedUpUser2 = await this.props.setCurrentUserMutation({variables: signedUpUser.data.signupUser})
      console.log(this.props)
      return signedUpUser2
    }

    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." onChangeText={(val) => {this.setState({'email': val})}} />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." onChangeText={(val) => {this.setState({'password': val})}} />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
              onSignUp().then((ret) => {
                console.log("onSignUp")
                console.log(ret)
                this.props.navigation.navigate("SignedIn")
              });
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Sign In"
            onPress={() => this.props.navigation.navigate("SignIn")}
          />
        </Card>
      </View>
    )
  }
};
