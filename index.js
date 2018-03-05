import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/app/reducers'

// import App from './src/app/components/App';
import App from './src/app/components/App' //Import the component file

const initialState = { plants: [] };

class StoreApp extends Component {
  render() { 
    return (   
    	// <App />
      <Provider store={createStore(reducers, initialState)}>
        <App />  
      </Provider>   
		)
  }
}

AppRegistry.registerComponent('cultivar', () => StoreApp);
