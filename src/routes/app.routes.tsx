import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  House,
  ListChecks,
  ShoppingCartSimple,
  SquaresFour,
} from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 5,
          paddingBottom: 5,
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
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SquaresFour size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ShoppingCartSimple size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Prescription'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ListChecks size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
