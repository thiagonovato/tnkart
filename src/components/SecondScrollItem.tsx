import { View, Text, Image } from 'react-native';
import React from 'react';

export interface ISecondScrollItem {
  id?: number;
  color: string;
  icon: string;
  title: string;
  fontColor: string;
}
export default function SecondScrollItem({
  color,
  icon,
  title,
  fontColor,
  ...rest
}: ISecondScrollItem) {
  return (
    <View className=' items-center pr-3' {...rest}>
      <View
        className='w-20 h-20 justify-center items-center rounded-lg'
        style={{ backgroundColor: color }}
      >
        <Image source={icon} className='h-7 w-7  p-4'></Image>
        <Text className='pt-2 text-xs' style={{ color: fontColor }}>
          {title}
        </Text>
      </View>
    </View>
  );
}
