import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '50%'
  },
  image: {
    width: 56,
    height: 56,
    marginTop: 80,
  },
  title: {
    marginTop: 80,
    marginBottom: 50,
    fontFamily: 'vincHand',
    fontSize: 30,
    textShadowColor: 'black'
  },
  loginButton: {
    width: 100
  }
});

export default styles;
