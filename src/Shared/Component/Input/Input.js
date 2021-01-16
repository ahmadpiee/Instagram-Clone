import React from 'react';
import {View, Text} from 'react-native';
import {Input as TextInput} from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../Utils/Color';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Input = ({
  placeholder,
  style,
  onChangeText,
  secureTextEntry = false,
  rightIcon,
}) => {
  return (
    <TextInput
      style={{
        ...style,
      }}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onChangeText}
      inputContainerStyle={{
        borderWidth: 1,
        borderColor: Color.grey,
        borderRadius: moderateScale(6),
        paddingHorizontal: moderateScale(16),
      }}
      inputStyle={{fontSize: moderateScale(14)}}
      rightIcon={rightIcon}
    />
  );
};

export const InputPassword = ({onChangeText, hide, onPress}) => {
  return (
    <Input
      rightIcon={() => (
        <TouchableOpacity onPress={onPress}>
          <Feather
            name={hide ? 'eye-off' : 'eye'}
            size={moderateScale(20)}
            color={Color.grey}
          />
        </TouchableOpacity>
      )}
      secureTextEntry={!hide}
      onChangeText={onChangeText}
      placeholder="Password"
    />
  );
};
