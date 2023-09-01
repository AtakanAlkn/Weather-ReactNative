import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
