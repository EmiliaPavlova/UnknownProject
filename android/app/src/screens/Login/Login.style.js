import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '70%'
  },
  image: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: 'pink'
  },
  title: {
    marginTop: 80,
    marginBottom: 50,
    fontFamily: 'vincHand',
    fontSize: 30,
    textShadowColor: 'black',
    // fontWeight: '700',
  },
  loginButton: {
    width: 100
  }
});

export default styles;
