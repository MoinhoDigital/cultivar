import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './src/app/components/App' //Import the component file

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjepw2b6p1tmh01887pjj3ovl' }),
  cache: new InMemoryCache()
});


const initialState = { plants: [] };

class RootApp extends Component {
  render() { 
    return (   
		  <ApolloProvider client={client}>
    		<App /> 
		  </ApolloProvider>  
 		)
  }
} 

AppRegistry.registerComponent('cultivar', () => RootApp);
