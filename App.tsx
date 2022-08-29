import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>TN Kart</Text>
      <StatusBar style='auto' />
    </View>
  );
}
