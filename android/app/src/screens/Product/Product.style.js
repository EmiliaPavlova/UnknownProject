import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productWrapper: {
    paddingTop: 40,
    paddingRight: 100,
    paddingBottom: 100,
    paddingLeft: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  productHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40
  },
  productImage: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: 'pink'
  },
  productTitle: {
    marginLeft: 20,
    fontFamily: 'vincHand',
    fontSize: 30,
    lineHeight: 56,
    textShadowColor: '#000'
  },
  text: {
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'vincHand',
    textShadowColor: '#000'
  },
  button: {
    width: 120,
    marginLeft: 20
  }
});

export default styles;
