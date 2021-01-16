import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const medium = 100;
const colorButton = '#0095f6';

export const LandingStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  iconImage: {
    width: moderateScale(medium),
    height: moderateScale(medium),
  },
  topContainer: {
    justifyContent: 'flex-end',
    paddingBottom: hp(10),
    alignItems: 'center',
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
