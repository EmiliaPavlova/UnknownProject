import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './Product.style';

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
const back = require('../../assets/images/back-arrow.png');

class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={styles.header}>{navigation.state.params.product.key}</Text>,
    headerLeft: <TouchableHighlight
      underlayColor="transparent"
      onPress={() => {
        const navigateAction = NavigationActions.back();
        navigation.dispatch(navigateAction);
      }}
    >
      <Image
        source={back}
        style={styles.navigationBack}
      />
    </TouchableHighlight>,
  })

  render() {
    const productName = this.props.navigation.state.params.product.key;
    const image = this.props.navigation.state.params.product.image;

    return (
      <View style={styles.productWrapper}>
        <View style={styles.productHeader}>
          <Image style={styles.productImage} source={image} />
          <Text style={styles.productTitle}>{productName}</Text>
        </View>
        <Text style={styles.text}>{'\t'}{'\t'}{'\t'}{text}</Text>
        <Button text='All Products' style={styles.button} onPress={() => this.props.navigation.navigate('Menu')} />
      </View>

    )
  }
}

Product.propTypes = {
  onClick: PropTypes.func
};

export default Product;
