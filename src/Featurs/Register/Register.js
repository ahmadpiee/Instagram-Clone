import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Poppins from '../../Shared/Component/Poppins';
import {RegisterStyle} from './style';

// sub component
import Phone from './subComponent/Phone';
import Email from './subComponent/Email';
import {Keyboard} from 'react-native';
import {Color} from '../../Shared/Utils/Color';

export default function Register(props) {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  const actionActivity1 = () => {
    setActive1(!active1);
    setActive2(false);
  };

  const actionActivity2 = () => {
    setActive2(!active2);
    setActive1(false);
  };

  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };

  const RenderTopContainer = () => {
    return (
      <View style={RegisterStyle.topContainer}>
        <Ionicons
          name="person-circle-outline"
          size={moderateScale(160)}
          color="#262626"
        />
      </View>
    );
  };

  const RenderTabBar = () => {
    return (
      <View style={RegisterStyle.midContainer}>
        <TouchableOpacity
          disabled={active1}
          onPress={actionActivity1}
          activeOpacity={0.9}
          style={
            active1
              ? RegisterStyle.BorderActive
              : RegisterStyle.BorderedNonActive
          }>
          <Poppins
            title="PHONE NUMBER"
            color="#262626"
            size={moderateScale(14)}
            type={active1 ? 'Bold' : 'Regular'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={active2}
          onPress={actionActivity2}
          activeOpacity={0.9}
          style={
            active2
              ? RegisterStyle.BorderActive
              : RegisterStyle.BorderedNonActive
          }>
          <Poppins
            title="EMAIL ADDRESS"
            color="#262626"
            size={moderateScale(14)}
            type={active2 ? 'Bold' : 'Regular'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderTabComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: moderateScale(20),
        }}>
        <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
          {active1 ? <Phone /> : <Email />}
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={RegisterStyle.Container}>
        <RenderTopContainer />
        <RenderTabBar />
        <RenderTabComponent />
      </View>
    </ScrollView>
  );
}
