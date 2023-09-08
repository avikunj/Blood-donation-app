import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import AppContainer from '../components/Container';
import AppInputField from '../components/Form/inputField';
import AppButton from '../components/Form/button';
import AppLink from '../components/Form/link';

const ResetPasswordScreen = ({navigation}: {navigation: any}) => {
  return (
    <AppContainer
      pageTitle={'Reset Password'}
      pageSubTitle={'Reset password with an ease'}>
      <AppInputField
        label={'Mobile Number'}
        keyboardType={'phone-pad'}
        placeholder={'Enter mobile number'}
        value={''}
        onChange={(value: any) => console.log(1)}
      />
      <AppButton innerText={'Send OTP'} onPress={() => console.log(1)} />
      <AppLink
        text={'Got your password back? Login'}
        link={'Login'}
        navigation={navigation}
      />
    </AppContainer>
  );
};

export default ResetPasswordScreen;
