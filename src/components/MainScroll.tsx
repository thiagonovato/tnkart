import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import MainScrollItem from './MainScrollItem';
import IconMedicine from '../assets/IconMedicine.png';
import HeartBeat from '../assets/heartbeat.png';
import BabyCare from '../assets/babycare.png';
import Order from '../assets/order.png';

const arr = [
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
export default function MainScroll() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 14,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {arr?.map((item) => {
        return (
          <MainScrollItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            color={item.color}
          />
        );
      })}
    </ScrollView>
  );
}
