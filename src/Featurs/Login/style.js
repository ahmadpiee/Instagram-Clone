import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Color} from '../../Shared/Utils/Color';

const medium = 100;

export const LoginStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(4),
  },
  iconContainer: {
    marginBottom: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconImage: {
    width: moderateScale(medium),
    height: moderateScale(medium),
  },
  inputContainer: {
    height: moderateScale(200),
    justifyContent: 'space-around',
  },
  textOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(10),
  },
  Divider: {
    height: moderateScale(1),
    flex: 1,
    backgroundColor: Color.grey,
    marginHorizontal: moderateScale(10),
  },
  optionsContainer: {
    flex: 1,
  },
  facebookLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
