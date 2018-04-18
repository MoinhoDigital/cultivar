import { AsyncStorage } from "react-native";

export const CURRENT_USER_KEY = "current-user";

export const onSignIn = (props, email, password) => { 
  const graphcoolResponse = props.authenticateUserMutation({variables: { email: email, password: password }})
  console.log(props.setCurrentUserMutation({variables: graphcoolResponse.data}))
  AsyncStorage.setItem(CURRENT_USER_KEY, graphcoolResponse.data)
  return graphcoolResponse.data
}



export const onSignOut = () => AsyncStorage.removeItem(CURRENT_USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(CURRENT_USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const currentUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(CURRENT_USER_KEY)
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
};

