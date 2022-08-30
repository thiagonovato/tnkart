import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import SecondScrollItem, { ISecondScrollItem } from './SecondScrollItem';

interface IProps {
  title: string;
  items: Array<ISecondScrollItem>;
}

export default function SecondScroll({ title, items }: IProps) {
  return (
    <View className='px-3 pb-2 bg-white'>
      {title && (
        <View className='flex flex-row justify-between items-center py-2'>
          <Text className='font-bold'>{title}</Text>
          <TouchableOpacity>
            <Text className='text-gray-400'>{'View more >'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => {
          return (
            <SecondScrollItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              color={item.color}
              fontColor={item.fontColor}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
