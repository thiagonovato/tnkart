import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

interface IProps {
  img: string;
}
export default function RectangleComponent({ img }: IProps) {
  return (
    <TouchableOpacity>
      <View className='px-3 py-4 bg-white justify-center items-center mt-3'>
        <Image source={img} className='h-auto'></Image>
      </View>
    </TouchableOpacity>
  );
}
