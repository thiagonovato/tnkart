import { View, Text } from 'react-native';
import React from 'react';
import ListItemsItem, { IItem } from './ListItemsItem';

interface IProps {
  items: Array<IItem>;
  type?: string;
}
export default function ListItems({ items, type = 'square' }: IProps) {
  return (
    <View className='px-3 pb-2'>
      <View className='flex flex-row items-center flex-wrap justify-between '>
        {items.map((item) => {
          return (
            <ListItemsItem
              type={type}
              key={item.id}
              title={item.title}
              icon={item.icon}
              color={item.color}
              fontColor={item.fontColor}
            />
          );
        })}
      </View>
    </View>
  );
}
