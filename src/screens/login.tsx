import React, {useState} from 'react';
import {AppText} from '../components/Text';
import AppInputField from '../components/Form/inputField';
import AppButton from '../components/Form/button';
import AppLink from '../components/Form/link';
import AppCheckBox from '../components/Form/checkbox';
import AppRow from '../components/Row';
import AppContainer from '../components/Container';
import AppIcon from '../components/Icon';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<any>([]);

  const [state, setState] = useState({
    mobileNumber: '',
    password: '',
  });

  const handleChange = (name: any, value: any) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <AppContainer
      pageTitle={'Welcome'}
      pageSubTitle={'Sign in to continue'}
      navigation={navigation}>
      <AppInputField
        label={'Mobile Number'}
        keyboardType={'phone-pad'}
        placeholder={'Enter mobile number'}
        value={state.mobileNumber}
        onChange={(value: any) => handleChange('mobileNumber', value)}
      />
      <AppInputField
        label={'Password'}
        keyboardType={'default'}
        isPassword={true}
        placeholder={'Enter password'}
        value={state.password}
        onChange={(value: any) => handleChange('password', value)}
      />
      <AppRow style={{marginVertical: 15}}>
        <AppRow>
          {/* <AppCheckBox
            value={toggleCheckBox}
            onChange={(value: any) => setToggleCheckBox(value)}
          /> */}
          {/* <AppText text={'Remember Me'} type="SubHeading" /> */}
        </AppRow>
        <AppLink
          text={'Forget Password?'}
          link={'ResetPassword'}
          navigation={navigation}
        />
      </AppRow>
      <AppButton
        innerText={'Login'}
        onPress={() => navigation.navigate('SearchScreen')}
      />
      <AppLink
        text={"Don't have an account? Sign up !"}
        link={'Register'}
        style={{marginVertical: 15}}
        navigation={navigation}
      />
    </AppContainer>
  );
};

export default LoginScreen;
