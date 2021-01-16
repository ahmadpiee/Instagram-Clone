import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../Shared/Utils/Color';

export const RegisterStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  topContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  BorderActive: {
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  BorderedNonActive: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  midContainer: {
    flexDirection: 'row',
    width: widthPercentageToDP(92),
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: moderateScale(48),
  },
  Footer: {
    height: moderateScale(48),
    borderWidth: 1,
    borderColor: Color.grey,
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
