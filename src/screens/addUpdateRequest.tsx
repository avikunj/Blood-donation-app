import React from 'react';
import AppContainer from '../components/Container';
import {AppText} from '../components/Text';
import AppSelectBox from '../components/Form/selectField';
import AppInputField from '../components/Form/inputField';
import AppButton from '../components/Form/button';
import AppSwitch from '../components/Form/switch';
import AppRow from '../components/Row';

const AddUpdateRequest = () => {
  return (
    <AppContainer
      pageTitle={'New Request'}
      pageSubTitle={'Request to donate blood and save life'}>
      <AppInputField
        label={'Patient Name'}
        keyboardType="default"
        placeholder={'Provide Patient Name'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppInputField
        label={'Patient Phone'}
        keyboardType="default"
        placeholder={'Provide patient phone number'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label={'Blood Group'}
        options={['AB+']}
        onChange={() => console.log(1)}
      />
      <AppInputField
        label={'Number of Units'}
        keyboardType="numeric"
        placeholder={'Provide number of units required'}
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
      <AppInputField
        label={'Location'}
        keyboardType="default"
        placeholder={'Provide location name where unit is required'}
        value={''}
        onChange={() => console.log(1)}
      />
      <AppRow style={{justifyContent: 'space-between', marginTop: 20}}>
        <AppText
          type="SubHeading"
          text={'Will you provide pick and drop service?'}
        />
        <AppSwitch state={true} handleChange={() => console.log(1)} />
      </AppRow>
      <AppButton innerText={'post request'} onPress={() => console.log(1)} />
    </AppContainer>
  );
};

export default AddUpdateRequest;
