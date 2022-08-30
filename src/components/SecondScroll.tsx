import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import SecondScrollItem, { ISecondScrollItem } from './SecondScrollItem';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  title: string;
  items: Array<ISecondScrollItem>;
}

export default function SecondScroll({ title, items }: IProps) {
  const navigation = useNavigation();

  return (
    <View className='px-3 pb-2 bg-white'>
      {title && (
        <View className='flex flex-row justify-between items-center py-2'>
          <Text className='font-bold'>{title}</Text>
          <TouchableOpacity>
            <Text
              className='text-gray-400'
              onPress={() => navigation.navigate('Categories')}
            >
              {'View More >'}
            </Text>
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
