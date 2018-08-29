import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$brandPrimary',
    height: '100%',
  },
  logoWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 25,
  },
});

export default styles;
