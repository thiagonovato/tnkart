import { View, Text, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import SearchField from '../components/SearchField';
import ListItems from '../components/ListItems';

import HealthCare from '../assets/healthcare.png';
import Maternity from '../assets/maternity.png';
import SuggarBloodLevel from '../assets/sugar-blood-level.png';
import Fitness from '../assets/fitness.png';
import GoBack from '../components/GoBack';
export default function CategoriesScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const itemsCategories = [
    {
      id: 1,
      color: '#FFF2F4',
      icon: HealthCare,
      title: 'Health',
      fontColor: '#FF304F',
    },
    {
      id: 2,
      color: '#EAFAFF',
      icon: Maternity,
      title: 'Maternity',
      fontColor: '#00C5FF',
    },
    {
      id: 3,
      color: '#FFF6DF',
      icon: SuggarBloodLevel,
      title: 'Diabets',
      fontColor: '#FFB700',
    },
    {
      id: 4,
      color: '#FFE8E3',
      icon: Fitness,
      title: 'Fitness',
      fontColor: '#FF390E',
    },
  ];
  return (
    <View className='bg-white h-screen'>
      <SafeAreaView>
        <Header />
        <GoBack title='Categories' />
        <SearchField />
        <ScrollView
          className='bg-white'
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <ListItems items={itemsCategories} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
