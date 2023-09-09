import React from 'react';
import AppRow from '../Row';
import AppIcon from '../Icon';
import {colors} from '../../stylesheets/colors';
import {
  useFocusEffect,
  useRoute,
  getFocusedRouteNameFromRoute,
  useNavigationState,
} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const AppMenu = ({navigation}: {navigation: any}) => {
  const routes = useNavigationState(state => state.routes);
  const currentRoute = routes[routes.length - 1].name;
  const publicRoutes = ['Login', 'SplashScreen', 'Register', 'ResetPassword'];
  return (
    <>
      {!publicRoutes.includes(currentRoute) ? (
        <AppRow
          style={{
            backgroundColor: colors.background,
            paddingHorizontal: 20,
            paddingVertical: 10,
            position: 'absolute',
            bottom: 0,
            borderTopWidth: 1,
            borderTopColor: colors.primary,
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <AppIcon
              icon={'search'}
              size={25}
              color={
                currentRoute == 'SearchScreen' ||
                currentRoute == 'SearchResults'
                  ? colors.primary
                  : colors.white
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <AppIcon
              icon={'user'}
              size={25}
              color={
                currentRoute == 'Profile' || currentRoute == 'EditProfile'
                  ? colors.primary
                  : colors.white
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AddUpdateRequest')}>
            <AppIcon
              icon={'plus'}
              size={25}
              color={
                currentRoute == 'AddUpdateRequest'
                  ? colors.primary
                  : colors.white
              }
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <AppIcon
              icon={'gear'}
              size={25}
              color={currentRoute == 'Settings' ? colors.primary : colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactScreen')}>
            <AppIcon
              icon={'comment'}
              size={25}
              color={
                currentRoute == 'ContactScreen' ? colors.primary : colors.white
              }
            />
          </TouchableOpacity>
        </AppRow>
      ) : null}
    </>
  );
};

export default AppMenu;
