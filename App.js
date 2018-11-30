import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './android/app/src/screens/Login/Login';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}
