import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text
} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './Product.style';

const image = require('../../assets/images/product.png');
const title = 'Product 1';
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const Product = ({ onClick }) => (
  <View style={styles.productWrapper}>
    <View style={styles.productHeader}>
      <Image style={styles.productImage} source={image} />
      <Text style={styles.productTitle}>{title}</Text>
    </View>
    <Text style={styles.text}>{'\t'}{'\t'}{'\t'}{text}</Text>
    <Button text='All Products' style={styles.button} onPress={onClick} />
  </View>
);

Product.propTypes = {
  onClick: PropTypes.func
};


export default Product;
