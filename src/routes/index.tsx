import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './app.routes';
import BrandScreen from '../screens/BrandScreen';

const Stack = createNativeStackNavigator();
export function Routes() {
  // return <AppRoutes />;
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Main'
        component={AppRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Brands'
        component={BrandScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
