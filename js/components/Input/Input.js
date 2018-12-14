import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './Input.style';

const Input = ({ value, style, secureTextEntry, onChangeValue, setDefaultValue, clearValue }) => (
  <View>
    <TextInput
      value={value}
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      onFocus={clearValue}
      onBlur={setDefaultValue}
      onChangeText={onChangeValue}
    />
  </View>
);

Input.propTypes = {
  value: PropTypes.string,
  style: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  onChangeValue: PropTypes.func,
  setDefaultValue: PropTypes.func,
  clearValue: PropTypes.func
}

Input.defaultProps = {
  secureTextEntry: false
}

export default Input;
