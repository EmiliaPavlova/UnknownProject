import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuWrapper: {
    flex: 1,
    width: '100%'
  },
  menuTitle: {
    width: '100%',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'vincHand',
    fontSize: 30,
    lineHeight: 58,
    textShadowColor: '#000'
  },
  row: {
    flexDirection: 'row',
    lineHeight: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#000',
  },
  lastRow: {
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
    marginLeft: 10
  },
  text: {
    marginLeft: 10,
    fontFamily: 'vincHand',
    fontSize: 20,
    textShadowColor: '#000'
  },
  arrow: {
    padding: 5,
    paddingTop: 2,
    marginRight: 20,
    color: '#008ACE',
    backgroundColor: '#76cdd8',
    borderRadius: 20
  }
});

export default styles;
