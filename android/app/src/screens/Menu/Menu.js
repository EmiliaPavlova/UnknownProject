import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styles from './Menu.style';

const image = require('../../assets/images/product.png');
const title = 'Product 1';

const data = [
  { key: 'Product 1', image: require('../../assets/images/product.png')},
  { key: 'Product 2', image: require('../../assets/images/login.png')},
  { key: 'Product 3', image: require('../../assets/images/star.png')},
  { key: 'Product 4', image: require('../../assets/images/camera.png')},
  { key: 'Product 5', image: require('../../assets/images/present.png')},
  { key: 'Product 6', image: require('../../assets/images/plus.png')},
  { key: 'Product 7', image: require('../../assets/images/cart.png')},
  { key: 'Product 8', image: require('../../assets/images/ball.png'), order: 'last'}
];

class Menu extends Component {
  render() {
    return (
      <View style={styles.menuWrapper}>
      <Text style={styles.menuTitle}>Products</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {}}>
            <View style={[styles.row, item.order === 'last' ? styles.lastRow : null]}>
              <View style={styles.leftSide}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text}>{item.key}</Text>
              </View>
              <Text style={styles.arrow}>&#x27A4;</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    );
  }
}

export default Menu;
