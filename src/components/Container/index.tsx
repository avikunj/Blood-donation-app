import React from 'react';
import {ScrollView} from 'react-native';
import {colors} from '../../stylesheets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppIcon from '../Icon';
import AppMenu from '../Menu';
import {AppText} from '../Text';

const AppContainer = ({
  pageTitle,
  pageSubTitle,
  children,
  navigation,
}: {
  pageTitle?: String;
  pageSubTitle?: String;
  children: any;
  navigation: any;
}) => {
  let {background} = colors;
  return (
    <SafeAreaView>
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: background}}>
        <AppText
          text={pageTitle || ''}
          type="Heading"
          style={{alignSelf: 'center', marginTop: 10}}
        />
        <AppText
          text={pageSubTitle || ''}
          type="SubHeading"
          style={{alignSelf: 'center', marginVertical: 10}}
        />
        {children}
      </ScrollView>
      <AppMenu navigation={navigation} />
    </SafeAreaView>
  );
};

export default AppContainer;
