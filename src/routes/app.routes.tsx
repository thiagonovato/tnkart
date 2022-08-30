import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  House,
  ListChecks,
  ShoppingCartSimple,
  SquaresFour,
} from 'phosphor-react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import PrescriptionScreen from '../screens/PrescriptionScreen';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 5,
          paddingBottom: 5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: 'absolute',
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <House size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SquaresFour size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ShoppingCartSimple size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Prescription'
        component={PrescriptionScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ListChecks size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
