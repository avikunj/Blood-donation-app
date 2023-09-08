import React, {useState} from 'react';
import AppContainer from '../components/Container';
import AppRow from '../components/Row';
import {AppText} from '../components/Text';
import AppSwitch from '../components/Form/switch';
import {colors} from '../stylesheets/colors';
import AppIcon from '../components/Icon';

const SettingScreen = ({navigation}: {navigation: any}) => {
  const [state, setState] = useState<any>({
    push: true,
    whatsapp: true,
    email: true,
    sms: true,
    call: true,
    status: true,
    pickAndDrop: true,
  });

  const handleChange = (name: any) => {
    setState({
      ...state,
      [name]: !state[name],
    });
  };

  const settings = [
    {
      title: 'status',
      icon: 'user-plus',
      text: 'My availability for donation',
    },
    {
      title: 'push',
      icon: 'bell',
      text: 'Receive push notifications',
    },
    {
      title: 'email',
      icon: 'envelope-open',
      text: 'Receive email notifications',
    },
    {
      title: 'sms',
      icon: 'envelope',
      text: 'Receive sms notifications',
    },
    {
      title: 'call',
      icon: 'phone',
      text: 'Receive emergency calls',
    },
    {
      title: 'whatsapp',
      icon: 'whatsapp',
      text: 'Receive whatsapp notifications',
    },
    {
      title: 'pickAndDrop',
      icon: 'car',
      text: 'Provide pick and drop service',
    },
  ];

  return (
    <AppContainer
      pageTitle={'Settings'}
      pageSubTitle={'Manage your app settings'}
      navigation={navigation}>
      {settings.map(item => {
        return (
          <AppRow
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 0.5,
              borderColor: colors.lightGrey,
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}>
            <AppRow>
              <AppIcon
                size={20}
                color={colors.primary}
                icon={item.icon}
                style={{paddingRight: 10}}
              />
              <AppText text={item.text} type="Info"></AppText>
            </AppRow>

            <AppSwitch
              state={state[item.title]}
              handleChange={() => handleChange(item.title)}
            />
          </AppRow>
        );
      })}
    </AppContainer>
  );
};

export default SettingScreen;
