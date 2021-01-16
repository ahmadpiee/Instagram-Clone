import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {LandingStyle} from './style';
import FastImage from 'react-native-fast-image';
import Poppins from '../../Shared/Component/Poppins';
import {moderateScale} from 'react-native-size-matters';
import {BlueButton} from '../../Shared/Component/Button';

export default function LandingPage(props) {
  const actionCreateUser = () => {
    props.navigation.push('Auth', {screen: 'Register'});
  };

  const actionLogin = () => {
    props.navigation.push('Auth', {screen: 'Login'});
  };

  return (
    <View style={LandingStyle.Container}>
      <View style={LandingStyle.topContainer}>
        <FastImage
          source={require('../../assets/images/ig.png')}
          style={LandingStyle.iconImage}
          resizeMode="contain"
        />
      </View>
      <View style={LandingStyle.bottomContainer}>
        <BlueButton
          onPress={actionCreateUser}
          title="Create New User"
          fontSize={moderateScale(12)}
          textColor="white"
        />
        <TouchableOpacity activeOpacity={0.8} onPress={actionLogin}>
          <Poppins title="Login" size={moderateScale(12)} color="#0095f6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
