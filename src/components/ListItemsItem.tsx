import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export interface IItem {
  id?: number;
  color: string;
  icon: string;
  title: string;
  fontColor: string;
}
export default function ListItemsItem({
  color,
  icon,
  title,
  fontColor,
  ...rest
}: IItem) {
  return (
    <TouchableOpacity>
      <View className='items-center pb-3' {...rest}>
        <View
          className='w-44 h-44 min-w-fit max-w-fit justify-center items-center rounded-lg'
          style={{ backgroundColor: color }}
        >
          <Image source={icon} className='h-10 w-10  p-4'></Image>
          <Text className='pt-2 text-xl' style={{ color: fontColor }}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
