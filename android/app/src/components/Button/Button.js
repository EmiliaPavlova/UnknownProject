import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './Button.style';
import loginImage from '../../assets/images/login.png';

const Button =({ text, style, onPress }) => (
  <View style={styles.buttonWrapper}>
    <TouchableHighlight style={[styles.button, style]} onPress={this.onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  </View>
);

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
}

export default Button;
