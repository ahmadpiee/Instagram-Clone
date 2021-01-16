import React from 'react';
import {View, TextInput} from 'react-native';
import Poppins from '../../../Shared/Component/Poppins';
import {moderateScale} from 'react-native-size-matters';
import {PhoneStyle} from './style';
import {BlueButton} from '../../../Shared/Component/Button';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Phone() {
  return (
    <>
      <View style={PhoneStyle.MainContainer}>
        <View>
          <View style={PhoneStyle.container}>
            <View style={PhoneStyle.codeContainer}>
              <Poppins
                style={{marginTop: moderateScale(3)}}
                title="ID +62"
                color="#9CADB3"
                size={moderateScale(13)}
              />
            </View>
            <View style={PhoneStyle.inputContainer}>
              <TextInput placeholder="Phone Number" />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP(92),
          marginBottom: moderateScale(20),
        }}>
        <Poppins
          style={{textAlign: 'center'}}
          title="You may receive SMS updates from Instagram and can opt out at any time"
          color="#9CADB3"
          size={moderateScale(12)}
        />
      </View>
      <BlueButton title="Next" fontSize={moderateScale(12)} textColor="white" />
    </>
  );
}
