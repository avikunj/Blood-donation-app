import React from 'react';
import AppContainer from '../components/Container';
import {AppText} from '../components/Text';
import AppInputField from '../components/Form/inputField';
import AppSelectBox from '../components/Form/selectField';
import AppButton from '../components/Form/button';
import AppImageLoader from '../components/Image/image';
import AppRow from '../components/Row';
import AppIcon from '../components/Icon';
import {colors} from '../stylesheets/colors';
import Spacer from '../components/Spacer';

const EdirProfileScreen = ({navigation}: {navigation: any}) => {
  return (
    <AppContainer
      pageTitle={'Edit Profile'}
      pageSubTitle={'Edit your personal information'}
      navigation={navigation}>
      <AppRow style={{alignSelf: 'center'}}>
        <AppImageLoader
          width={100}
          height={100}
          source={require('../../assets/logo.png')}
          styles={{
            marginVertical: 20,
          }}
        />
        <AppIcon
          icon={'edit'}
          size={30}
          color={colors.primary}
          style={{
            marginLeft: -20,
            marginTop: 10,
            backgroundColor: colors.background,
          }}
        />
      </AppRow>

      <AppInputField
        label={'Name'}
        keyboardType="default"
        placeholder={'Enter Email'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppInputField
        label={'Email'}
        keyboardType="default"
        placeholder={'Enter Email'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppInputField
        label={'Phone'}
        keyboardType="default"
        placeholder={'Enter Email'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label={'State'}
        options={['Haryana']}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label={'City'}
        options={['Yamunanagar']}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label={'Blood Group'}
        options={['AB+']}
        onChange={() => console.log(1)}
      />
      <AppButton innerText={'Update'} onPress={() => console.log(1)} />
      <Spacer />
    </AppContainer>
  );
};

export default EdirProfileScreen;
