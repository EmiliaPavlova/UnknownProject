import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text
} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './Login.style';

const image = require('../../assets/images/login.png');

const Login = ({ onClick }) => (
  <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>Friday's shop</Text>
      <Button text='email' onPress={() => {}} />
      <Button text='Text box' onPress={() => {}} />
      <Button text='login' style={styles.loginButton} onPress={onClick} />
  </View>
);

Login.propTypes = {
  onClick: PropTypes.func
};

export default Login;
