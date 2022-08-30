import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BrandScrollItem, { IBrandItemsProps } from './BrandScrollItem';

interface IProps {
  title: string;
  items: Array<IBrandItemsProps>;
}
export default function BrandScroll({ title, items }: IProps) {
  return (
    <View className='px-3 pb-2 bg-white mt-3'>
      {title && (
        <View className='flex flex-row justify-between items-center py-2'>
          <Text className='font-bold'>{title}</Text>
          <TouchableOpacity>
            <Text className='text-gray-400'>{'View More >'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => {
          return (
            <BrandScrollItem
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
