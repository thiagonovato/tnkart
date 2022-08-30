import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export interface IItem {
  id?: number;
  color: string;
  icon: string;
  title: string;
  fontColor?: string;
  type?: string;
}
export default function ListItemsItem({
  color,
  icon,
  title,
  fontColor,
  type,
  ...rest
}: IItem) {
  const titleInternal = () => {
    return (
      <Text className='pt-2 text-xl' style={{ color: fontColor }}>
        {title}
      </Text>
    );
  };

  return (
    <TouchableOpacity>
      <View className='items-center pb-3' {...rest}>
        <View
          className={` min-w-fit max-w-fit justify-center items-center ${
            type === 'circle'
              ? 'rounded-full w-28 h-28'
              : 'rounded-lg w-44 h-44'
          }`}
          style={{ backgroundColor: color }}
        >
          <Image source={icon} className='h-10 w-10  p-4'></Image>
          {type !== 'circle' && titleInternal()}
        </View>
        {type === 'circle' && titleInternal()}
      </View>
    </TouchableOpacity>
  );
}
