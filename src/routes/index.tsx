import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './app.routes';

const Stack = createNativeStackNavigator();
export function Routes() {
  return <AppRoutes />;
}
