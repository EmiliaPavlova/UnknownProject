import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from "react-native";
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text
} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Login.style';

const token = AsyncStorage.getItem('userToken');
const image = require('../../assets/images/login.png');

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={styles.header}>Please sign in</Text>,
  })

  constructor() {
    super();
    this.state = {
      email: 'email',
      password: 'password',
      isFetching: false
    }
  }

  signInAsync = () => {
    this.setState({ isFetching: true });

    fetch('http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password
      })
    })
    .then(response => {
      if (response.status === 200) {
        this.setState({ isFetching: false })
        AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate('App');
      }
    })
    .catch(err => {
      console.log(err);
      this.setState({ isFetching: false });
    })
    this.setState({ isFetching: false });
  };

  changeValue = (value, field) => {
    this.setState({ [field]: value });
  };

  clearState = (field) => {
    if (this.state[field] === field) {
      this.setState({ [field]: '' });
    }
  };

  setPlaceholder = (field) => {
    if (this.state[field] === '') {
      this.setState({ [field]: field });
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>Friday's shop</Text>
        <Input
          value={this.state.email}
          onChangeValue={(value) => this.changeValue(value, 'email')}
          clearValue={() => this.clearState('email')}
          setDefaultValue={() => this.setPlaceholder('email')}
        />
        <Input
          value={this.state.password}
          secureTextEntry={true}
          onChangeValue={(value) => this.changeValue(value, 'password')}
          clearValue={() => this.clearState('password')}
          setDefaultValue={() => this.setPlaceholder('password')}
        />
        {this.state.isFetching
          ? <ActivityIndicator />
          : <Button text='login' onPress={this.signInAsync} />}
      </View>
    );
  }
}

export default Login;
