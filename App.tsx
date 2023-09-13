/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesList} from './src/routes';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {routesList.map((a: {route: string; component: React.FC<any>}) => {
          return (
            <Stack.Screen
              name={a.route}
              component={a.component}
              options={{headerShown: false, title: ''}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
