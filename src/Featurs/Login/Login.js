import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import {BlueButton} from '../../Shared/Component/Button';
import {Input, InputPassword} from '../../Shared/Component/Input/Input';
import Poppins from '../../Shared/Component/Poppins';
import {Color} from '../../Shared/Utils/Color';
import {LoginStyle} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);
  const [Disabled, setDisabled] = useState(true);

  console.log(username, password);

  const actionUserName = (text) => {
    setUsername(text);

    if (username.length && password.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const actionPassword = (text) => {
    setPassword(text);
    if (username.length && password.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const RenderInput = () => {
    return (
      <>
        <Input
          onChangeText={(text) => actionUserName(text)}
          placeholder="Phone number, email address or username"
        />
        <InputPassword
          onChangeText={(text) => actionPassword(text)}
          hide={hide}
          onPress={() => setHide(!hide)}
        />
        <BlueButton
          // onPress={actionCreateUser}
          disabled={Disabled}
          title="Log In"
          fontSize={moderateScale(12)}
          textColor="white"
        />
      </>
    );
  };

  const RenderOptions = () => {
    return (
      <React.Fragment>
        <View style={LoginStyle.textOptions}>
          <Poppins
            title="Forgotten your login details?"
            color={Color.grey}
            size={12}
          />
          <Poppins
            title={` Get help with logging in`}
            color={Color.blue}
            size={12}
          />
        </View>
        <View style={LoginStyle.textOptions}>
          <View style={LoginStyle.Divider} />
          <Poppins title="OR" color={Color.grey} size={14} />
          <View style={LoginStyle.Divider} />
        </View>
        <TouchableOpacity style={LoginStyle.facebookLogin}>
          <MaterialCommunityIcons
            name="facebook"
            size={moderateScale(28)}
            color={Color.blue}
          />
          <Poppins
            title={` Log In With Facebook`}
            color={Color.blue}
            size={14}
          />
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  return (
    <View style={LoginStyle.container}>
      <TouchableWithoutFeedback
        style={{
          flex: 1,
        }}
        onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={LoginStyle.iconContainer}>
            <FastImage
              source={require('../../assets/images/ig.png')}
              style={LoginStyle.iconImage}
              resizeMode="contain"
            />
          </View>
          <View style={LoginStyle.inputContainer}>{RenderInput()}</View>
          <View style={LoginStyle.optionsContainer}>{RenderOptions()}</View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}
