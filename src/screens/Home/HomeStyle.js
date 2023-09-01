import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../assets/theme/theme';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: theme.primaryColor,
  },
  innerContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  image: {
    marginVertical: 50,
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  mainText: {
    fontSize: 40,
    color: 'white',
  },
  text2: {
    marginTop: 5,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  innerContainer2: {
    backgroundColor: theme.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
  },
  innerContainer3: {
    backgroundColor: '#001026',
    padding: 15,
    borderRadius: 20,
    marginVertical: 20,
  },
  text3: {
    fontSize: 13,
    color: 'white',
  },
  c1: {
    marginVertical: 10,
  },
});
