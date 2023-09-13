/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import ResetPasswordScreen from './src/screens/resetPassword';
import SearchResultScreen from './src/screens/searchResults';
import SearchScreen from './src/screens/search';
import SettingScreen from './src/screens/settings';
import ProfileScreen from './src/screens/profile';
import EdirProfileScreen from './src/screens/editProfile';
import ContactScreen from './src/screens/contactUs';
import SplashScreen from './src/screens/splashScreen';
import AddUpdateRequest from './src/screens/addUpdateRequest';
import AddUpdateEvent from './src/screens/addUpdateEvent';
import RequestListScreen from './src/screens/requestList';
import BloodBanksList from './src/screens/bloodBanksList';
import AllEvents from './src/screens/eventsList';
import Myrequests from './src/screens/myRequests';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Events">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResultScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EdirProfileScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="AddUpdateRequest"
          component={AddUpdateRequest}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="AddUpdateEvent"
          component={AddUpdateEvent}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="RequestList"
          component={RequestListScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="RequestDetail"
          component={SplashScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="BloodBanksList"
          component={BloodBanksList}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="BloodBankDetail"
          component={SplashScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="Events"
          component={AllEvents}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="EventDetail"
          component={SplashScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="MyRequests"
          component={Myrequests}
          options={{headerShown: false, title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
