import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// component
import LandingPage from '../Featurs/LandingPage/LandingPage';
import Login from '../Featurs/Login/Login';
import Register from '../Featurs/Register/Register';
import Poppins from './Component/Poppins';
import {Color} from './Utils/Color';
import {moderateScale} from 'react-native-size-matters';
import {RegisterStyle} from '../Featurs/Register/style';
import {BackHandler} from 'react-native';

const Stack = createStackNavigator();

const AuthenticationStack = ({navigation, route}) => {
  const [Route, setRoute] = useState(route.params.screen);

  const actionChangeTitleAndRoute = () => {
    if (Route === 'Register') {
      navigation.navigate('Login');
      setRoute('Login');
    }

    if (Route === 'Login') {
      navigation.navigate('Register');
      setRoute('Register');
    }
  };

  console.log(Route);

  console.log(route);
  return (
    <>
      <Stack.Navigator
        initialRouteName={
          route.params.screen === 'Register' ? 'Register' : 'Login'
        }>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
      <View style={RegisterStyle.Footer}>
        <Poppins
          title={
            Route === 'Register'
              ? 'Already have an account? '
              : "Don't have an account?"
          }
          color="#9CADB3"
          size={moderateScale(12)}
          style={{marginRight: moderateScale(5)}}
        />
        <TouchableOpacity onPress={actionChangeTitleAndRoute}>
          <Poppins
            title={Route === 'Register' ? 'Login' : 'Sign up'}
            color={Color.blue}
            size={moderateScale(12)}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        options={{headerShown: false}}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Auth"
        component={AuthenticationStack}
      />
    </Stack.Navigator>
  );
}
