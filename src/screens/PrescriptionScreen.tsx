import { View, Text, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import { useNavigation } from '@react-navigation/native';

export default function PrescriptionScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className='bg-white h-screen'>
      <SafeAreaView>
        <Header />
        <SearchField />
        <ScrollView
          className='bg-white'
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <Text className='px-3'>Prescription</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
