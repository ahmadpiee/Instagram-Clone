import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Poppins from '../../../Shared/Component/Poppins';
import {moderateScale} from 'react-native-size-matters';
import {PhoneStyle} from './style';
import {BlueButton} from '../../../Shared/Component/Button';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Phone() {
  const [Disabled, setDisabled] = useState(true);
  const [inputEmail, setInputEmail] = useState('');

  const actionInputEmail = (text) => {
    setInputEmail(text);
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputEmail && regex.test(String(inputEmail))) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <View style={PhoneStyle.MainContainer}>
        <View>
          <View style={PhoneStyle.container}>
            <View style={PhoneStyle.inputContainer}>
              <TextInput
                onChangeText={(text) => {
                  actionInputEmail(text);
                }}
                placeholder="Email Adress"
              />
            </View>
          </View>
        </View>
      </View>
      <BlueButton
        disabled={Disabled}
        title="Next"
        fontSize={moderateScale(12)}
        textColor="white"
      />
    </>
  );
}
