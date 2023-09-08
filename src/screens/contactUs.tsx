import React from 'react';
import AppContainer from '../components/Container';
import {AppText} from '../components/Text';
import AppInputField from '../components/Form/inputField';
import AppButton from '../components/Form/button';

const ContactScreen = ({navigation}: {navigation: any}) => {
  return (
    <AppContainer
      pageTitle={'Contact Us'}
      pageSubTitle={'Feel free to share your thoughts'}
      navigation={navigation}>
      <AppInputField
        label={'Message'}
        keyboardType="default"
        placeholder={'Tell us how can we help?'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppText
        type="SubHeading"
        text={
          'Our team will get back to you within next 12 - 24 hours. Thanks for using our application.'
        }
      />
      <AppButton innerText={'Submit'} onPress={() => console.log(1)} />
    </AppContainer>
  );
};

export default ContactScreen;
