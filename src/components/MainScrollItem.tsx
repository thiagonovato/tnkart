import { View, Text, Image } from 'react-native';
import React from 'react';

interface IProps {
  color: string;
  icon: string;
  title: string;
}
export default function MainScrollItem({
  color,
  icon,
  title,
  ...rest
}: IProps) {
  return (
    <View className=' items-center pr-3' {...rest}>
      <View
        className='w-20 h-20 justify-center items-center rounded-lg'
        style={{ backgroundColor: color }}
      >
        <Image
          source={{ uri: icon }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        ></Image>
      </View>
      <Text className='pt-2'>{title}</Text>
    </View>
  );
}
