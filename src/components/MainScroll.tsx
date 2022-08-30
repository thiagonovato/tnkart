import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import MainScrollItem, { IItem } from './MainScrollItem';

interface IProps {
  items: Array<IItem>;
}
export default function MainScroll({ items }: IProps) {
  return (
    <View className='px-3 pb-2 bg-white'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => {
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
    </View>
  );
}
