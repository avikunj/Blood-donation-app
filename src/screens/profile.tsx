import React from 'react';
import AppContainer from '../components/Container';
import {AppText} from '../components/Text';
import AppRow from '../components/Row';
import AppImageLoader from '../components/Image/image';
import AppIcon from '../components/Icon';
import {colors} from '../stylesheets/colors';
import {TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  return (
    <AppContainer
      pageTitle={'Profile'}
      pageSubTitle={'Manage your profile settings'}
      navigation={navigation}>
      <AppRow
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <AppImageLoader
          width={100}
          height={100}
          source={require('../../assets/logo.png')}
        />
      </AppRow>
      <AppText
        text={'Avikunj Mendhiratta'}
        type="Info"
        style={{alignSelf: 'center', paddingTop: 20, paddingBottom: 10}}
      />
      <AppText
        style={{alignSelf: 'center'}}
        text={'Active since May, 2023'}
        type="SubHeading"
      />
      <AppRow
        style={{
          marginTop: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppText text={'Personal Information'} type="Info" />
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <AppIcon icon={'edit'} size={30} color={colors.primary} />
        </TouchableOpacity>
      </AppRow>
      <AppRow
        style={{
          marginVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          paddingBottom: 10,
          justifyContent: 'space-between',
        }}>
        <AppRow>
          <AppIcon
            icon={'envelope'}
            style={{paddingRight: 10}}
            size={20}
            color={colors.primary}
          />
          <AppText text={'Email'} type="SubHeading"></AppText>
        </AppRow>
        <AppText text={'avikunj48@gmail.com'} type="Info"></AppText>
      </AppRow>

      <AppRow
        style={{
          marginVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          paddingBottom: 10,
          justifyContent: 'space-between',
        }}>
        <AppRow>
          <AppIcon
            icon={'phone'}
            style={{paddingRight: 10}}
            size={20}
            color={colors.primary}
          />
          <AppText text={'Call'} type="SubHeading"></AppText>
        </AppRow>
        <AppText text={'7404115678'} type="Info"></AppText>
      </AppRow>
      <AppRow
        style={{
          marginVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          paddingBottom: 10,
          justifyContent: 'space-between',
        }}>
        <AppRow>
          <AppIcon
            icon={'map'}
            style={{paddingRight: 10}}
            size={20}
            color={colors.primary}
          />
          <AppText text={'State'} type="SubHeading"></AppText>
        </AppRow>
        <AppText text={'Haryana'} type="Info"></AppText>
      </AppRow>
      <AppRow
        style={{
          marginVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          paddingBottom: 10,
          justifyContent: 'space-between',
        }}>
        <AppRow>
          <AppIcon
            icon={'globe'}
            style={{paddingRight: 10}}
            size={20}
            color={colors.primary}
          />
          <AppText text={'City'} type="SubHeading"></AppText>
        </AppRow>
        <AppText text={'Yamunanagar'} type="Info"></AppText>
      </AppRow>
      <AppRow
        style={{
          marginVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          paddingBottom: 10,
          justifyContent: 'space-between',
        }}>
        <AppRow>
          <AppIcon
            icon={'user-plus'}
            style={{paddingRight: 10}}
            size={20}
            color={colors.primary}
          />
          <AppText text={'Blood Group'} type="SubHeading"></AppText>
        </AppRow>
        <AppText text={'AB+'} type="Info"></AppText>
      </AppRow>
    </AppContainer>
  );
};

export default ProfileScreen;
