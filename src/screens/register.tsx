import React, {useState} from 'react';
import {AppText} from '../components/Text';
import AppInputField from '../components/Form/inputField';
import AppButton from '../components/Form/button';
import AppLink from '../components/Form/link';
import AppCheckBox from '../components/Form/checkbox';
import AppRow from '../components/Row';
import AppContainer from '../components/Container';
import AppIcon from '../components/Icon';
import AppSelectBox from '../components/Form/selectField';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<any>([]);

  const [state, setState] = useState({
    name: '',
    mobileNumber: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
  });

  const bloodGroups = ['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'];

  const handleChange = (name: any, value: any) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <AppContainer pageSubTitle={'Sign up to continue'} pageTitle={'Welcome'}>
      <AppInputField
        label={'name'}
        keyboardType={'default'}
        placeholder={'Enter your name'}
        value={state.name}
        onChange={(value: any) => handleChange('name', value)}
      />
      <AppInputField
        label={'Mobile Number'}
        keyboardType={'phone-pad'}
        placeholder={'Enter mobile number'}
        value={state.mobileNumber}
        onChange={(value: any) => handleChange('mobileNumber', value)}
      />
      <AppSelectBox
        label="State"
        options={[]}
        onChange={() => console.log(1)}
      />
      <AppSelectBox label="City" options={[]} onChange={() => console.log(1)} />
      {/* <AppSelectBox
        label="Do you need pick and drop?"
        options={['Yes', 'No']}
        onChange={() => console.log(1)}
      /> */}
      <AppSelectBox
        label="Blood Group"
        options={bloodGroups}
        onChange={() => console.log(1)}
      />
      {/* <AppSelectBox
        label="When will you be available if needed?"
        options={[
          'Immediately',
          'Within next 2-4 hours',
          'Same Day',
          'The next day',
        ]}
        onChange={() => console.log(1)}
      /> */}

      <AppInputField
        label={'Password'}
        keyboardType={'default'}
        isPassword={true}
        placeholder={'Enter new password'}
        value={state.newPassword}
        onChange={(value: any) => handleChange('newPassword', value)}
      />
      <AppInputField
        label={'Confirm Password'}
        keyboardType={'default'}
        isPassword={true}
        placeholder={'Confirm new password'}
        value={state.confirmPassword}
        onChange={(value: any) => handleChange('confirmPassword', value)}
      />

      <AppButton innerText={'Register'} onPress={() => console.log(1)} />
      <AppLink
        text={'Already have an account? Sign in!'}
        link={'Login'}
        navigation={navigation}
      />
    </AppContainer>
  );
};

export default RegisterScreen;
