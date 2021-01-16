import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const PhoneStyle = StyleSheet.create({
  MainContainer: {
    width: widthPercentageToDP(92),
    marginBottom: moderateScale(20),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9CADB3',
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(6),
  },
  codeContainer: {
    borderRightWidth: 1,
    borderColor: '#9CADB3',
    paddingRight: moderateScale(10),
  },
  inputContainer: {
    flex: 1,
    marginLeft: moderateScale(6),
  },
});
