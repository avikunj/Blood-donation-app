import React, {useEffect} from 'react';
import AppContainer from '../components/Container';
import AppIcon from '../components/Icon';
import {colors} from '../stylesheets/colors';
import AppRow from '../components/Row';
import {useWindowDimensions} from 'react-native';
import {AppText} from '../components/Text';
import AppColumn from '../components/Column';
import {routes} from '../utils/enums';

const SplashScreen = ({navigation}: any) => {
  const window = useWindowDimensions();
  let {height} = window;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.LOGIN);
    }, 2000);
  }, []);

  return (
    <AppRow
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: colors.background,
      }}>
      <AppColumn extraStyles={{alignItems: 'center'}}>
        <AppIcon icon={'user-plus'} size={70} color={colors.primary} />
        <AppText type="Info" text={'Blood Donation'} />
      </AppColumn>
    </AppRow>
  );
};

export default SplashScreen;
