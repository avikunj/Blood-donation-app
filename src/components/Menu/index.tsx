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
import {routesList} from '../../routes';
import {routes} from '../../utils/enums';

const AppMenu = ({navigation}: {navigation: any}) => {
  const routeData = useNavigationState(state => state.routes);
  const currentRoute = routeData[routeData.length - 1].name;
  const publicRoutes = routesList
    ?.filter((b: any) => b.isPrivate == false)
    ?.map((a: any) => a.route);

  const {
    SEARCH,
    SEARCH_RESULTS,
    PROFILE,
    EDIT_PROFILE,
    PUT_REQUEST,
    GET_REQUESTS,
    CONTACT,
    SETTINGS,
  } = routes;

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
          <TouchableOpacity onPress={() => navigation.navigate(SEARCH)}>
            <AppIcon
              icon={'search'}
              size={25}
              color={
                currentRoute == SEARCH || currentRoute == SEARCH_RESULTS
                  ? colors.primary
                  : colors.white
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(PROFILE)}>
            <AppIcon
              icon={'user'}
              size={25}
              color={
                currentRoute == PROFILE || currentRoute == EDIT_PROFILE
                  ? colors.primary
                  : colors.white
              }
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(PUT_REQUEST)}>
            <AppIcon
              icon={'plus'}
              size={25}
              color={
                currentRoute == PUT_REQUEST ? colors.primary : colors.white
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(GET_REQUESTS)}>
            <AppIcon
              icon={'cart-plus'}
              size={25}
              color={
                currentRoute == GET_REQUESTS ? colors.primary : colors.white
              }
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(CONTACT)}>
            <AppIcon
              icon={'comment'}
              size={25}
              color={currentRoute == CONTACT ? colors.primary : colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(SETTINGS)}>
            <AppIcon
              icon={'gear'}
              size={25}
              color={currentRoute == SETTINGS ? colors.primary : colors.white}
            />
          </TouchableOpacity>
        </AppRow>
      ) : null}
    </>
  );
};

export default AppMenu;
