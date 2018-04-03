import { SwitchNavigator } from "react-navigation";

import SignedIn from "./navigators/SignedIn";
import SignedOut from "./navigators/SignedOut";

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        name: "SignIn",
        screen: SignedIn
      },
      SignedOut: {
        name: "SignedOut",
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
