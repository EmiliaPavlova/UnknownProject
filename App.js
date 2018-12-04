import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './android/app/src/screens/Login/Login';
import Product from './android/app/src/screens/Product/Product';
import Menu from './android/app/src/screens/Menu/Menu';
import styles from './styles';

export default class App extends Component {
  // TODO: clear this when navigation is added
  constructor(props) {
    super(props);
    this.state = { page: 'login' };
  }

  redirect = newPage => this.setState({ page: newPage });

  render() {
    const { page } = this.state;
    return (
      <View style={styles.container}>
        {page === 'login' && <Login onClick={() => this.redirect('menu')} />}
        {page === 'menu' && <Menu onClick={() => this.redirect('product')} />}
        {page === 'product' && <Product onClick={() => this.redirect('menu')} />}
      </View>
    );
  }
}
