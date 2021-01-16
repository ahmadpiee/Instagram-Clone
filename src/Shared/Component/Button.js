import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Poppins from './Poppins';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Color} from '../Utils/Color';

export const BlueButton = ({
  onPress,
  title,
  fontSize = moderateScale(12),
  textColor = 'black',
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        width: widthPercentageToDP(92),
        borderRadius: moderateScale(6),
        backgroundColor: disabled ? Color.lightBlue : Color.blue,
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(40),
        marginBottom: moderateScale(20),
        ...style,
      }}>
      <Poppins title={title} size={fontSize} color={textColor} />
    </TouchableOpacity>
  );
};
