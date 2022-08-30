import { View, Text, Image } from 'react-native';
import React from 'react';

export interface IBrandItemsProps {
  id?: number;
  color: string;
  icon: string;
  title: string;
}
export default function BrandScrollItem({
  color,
  icon,
  title,
  ...rest
}: IBrandItemsProps) {
  return (
    <View className=' items-center pr-3' {...rest}>
      <View
        className='w-20 h-20 justify-center items-center rounded-full border border-gray-200'
        style={{ backgroundColor: color }}
      >
        <Image source={icon}></Image>
      </View>
      <Text className='pt-2 text-xs'>{title}</Text>
    </View>
  );
}
