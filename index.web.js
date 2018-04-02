import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './src/App' //Import the component file

// Enable using vector-icons on web version
import Icon from 'react-native-vector-icons/dist/Ionicons';
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}
document.head.appendChild(style);

// Configure Apollo client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjepw2b6p1tmh01887pjj3ovl' }),
  cache: new InMemoryCache()
});

  class RootApp extends Component {
  render() { 
    return (   
		  <ApolloProvider client={client}>
    		<App />  
		  </ApolloProvider>  
 		)
  } 
} 

// register the app
AppRegistry.registerComponent('cultivar', () => RootApp);

AppRegistry.runApplication('cultivar', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});
