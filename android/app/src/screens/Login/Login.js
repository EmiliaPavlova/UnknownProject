import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import Button from '../../components/Button/Button';
// import loginImage from '../../assets/images/login.png';
import styles from './Login.style';

const image = require('../../assets/images/login.png');

class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} sourse={image} />
        {/* <Image
          style={styles.image}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        /> */}
        <Text style={styles.title}>Friday's shop</Text>
        <Button text='email' onPress={() => {}} />
        <Button text='Text box' onPress={() => {}} />
        <Button text='login' style={styles.loginButton} onPress={() => {}} />
      </View>
    );
  }
}

export default Login;
