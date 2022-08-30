import { View, Text, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import MainScroll from '../components/MainScroll';
import CarouselComponent from '../components/Carousel';
import SecondScroll from '../components/SecondScroll';
import BrandScroll from '../components/BrandScroll';

/**
 *
 * @returns Remover depois
 */

import IconMedicine from '../assets/IconMedicine.png';
import HeartBeat from '../assets/heartbeat.png';
import BabyCare from '../assets/babycare.png';
import Order from '../assets/order.png';
import HealthCare from '../assets/healthcare.png';
import Maternity from '../assets/maternity.png';
import SuggarBloodLevel from '../assets/sugar-blood-level.png';
import Fitness from '../assets/fitness.png';
import Pngwing from '../assets/pngwing.png';
import BrandHealth from '../assets/brandhealth.png';
import Bars from '../assets/bars.png';
import BrandConverse from '../assets/brandconverse.png';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const itemsMedicine = [
    {
      id: 1,
      color: '#FFF2F4',
      icon: IconMedicine,
      title: 'Medicine',
    },
    {
      id: 2,
      color: '#EAFAFF',
      icon: HeartBeat,
      title: 'Health Care',
    },
    {
      id: 3,
      color: '#FFF2D0',
      icon: BabyCare,
      title: 'Baby Care',
    },
    {
      id: 4,
      color: '#FFE8E3',
      icon: Order,
      title: 'Re-order',
    },
  ];

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

  return (
    <SafeAreaView>
      <ScrollView
        className='bg-gray-200'
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <Header />
        <SearchField />
        <MainScroll items={itemsMedicine} />
        <CarouselComponent />
        <SecondScroll title='Featured Categories' items={itemsCategories} />
        <BrandScroll title='Brands' items={itemsBrand} />
      </ScrollView>
    </SafeAreaView>
  );
}
