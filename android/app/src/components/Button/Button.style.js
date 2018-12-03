import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 30
  },
  button: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black'
  },
  buttonText: {
    fontFamily: 'vincHand',
    fontSize: 20,
    textShadowColor: 'black',
  }
});

export default styles;