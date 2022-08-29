import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import MainScrollItem from './MainScrollItem';

const arr = [
  {
    id: 1,
    color: '#FFF2F4',
    icon: 'https://picsum.photos/200/100',
    title: 'Medicine',
  },
  {
    id: 2,
    color: '#EAFAFF',
    icon: 'https://picsum.photos/200/200',
    title: 'Health Care',
  },
  {
    id: 3,
    color: '#FFF2D0',
    icon: 'https://picsum.photos/200/300',
    title: 'Baby Care',
  },
  {
    id: 4,
    color: '#FFE8E3',
    icon: 'https://picsum.photos/200/400',
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
