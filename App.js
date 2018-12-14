import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './js/screens/Login/Login';
import Menu from './js/screens/Menu/Menu';
import Product from './js/screens/Product/Product';

const AppNavigator = createStackNavigator(
  {
    Menu: Menu,
    Product: Product
  }
);

const AuthNavigator = createStackNavigator({ 
  Login: Login
});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
  ));

class App extends Component {
  constructor(props) {
    super(props);
    this.getTokenAsync = this.getTokenAsync.bind(this);;
  }

  getTokenAsync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    } catch (error) {
      console.log(err);
    }
  };

  render() {
    return (
        <AppContainer />
    );
  }
}

export default App;
