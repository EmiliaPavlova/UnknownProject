import React, { Component } from 'react';
import {
  View,
  Keyboard,
  Image,
  Text,
  TextInput,
  Button
} from 'react-native';
import styles from './Login.style';
import loginImage from '../../assets/images/login.png';

class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} sourse={require('../../assets/images/login.png')} />
        {/* <Image
          style={styles.image}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        /> */}
        <Text>Friday's shop</Text>
      </View>
    );
  }
}

export default Login;
