import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import MainScroll from '../components/MainScroll';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <Header />
      <SearchField />
      <MainScroll />
    </SafeAreaView>
  );
}
