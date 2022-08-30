import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import GoBack from '../components/GoBack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import ListItems from '../components/ListItems';

import Pngwing from '../assets/pngwing.png';
import BrandHealth from '../assets/brandhealth.png';
import Bars from '../assets/bars.png';
import BrandConverse from '../assets/brandconverse.png';

const itemsBrand = [
  {
    id: 1,
    color: '#FFF2F4',
    icon: Pngwing,
    title: 'Muscle',
  },
  {
    id: 2,
    color: '#EAFAFF',
    icon: BrandHealth,
    title: 'Health',
  },
  {
    id: 3,
    color: '#FFF2D0',
    icon: Bars,
    title: 'General',
  },
  {
    id: 4,
    color: '#FFE8E3',
    icon: BrandConverse,
    title: 'Converse',
  },
];
export default function BrandScreen() {
  return (
    <View className='bg-white h-screen'>
      <SafeAreaView>
        <Header />
        <GoBack title='Brands' />
        <SearchField />
        <ScrollView
          className='bg-white'
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <ListItems items={itemsBrand} type='circle' />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
