import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Heart } from 'phosphor-react-native';

interface IProductDetail {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  favorite: boolean;
}
export default function ProductDetail({
  id,
  img,
  title,
  description,
  price,
  oldPrice,
  discount,
  favorite,
  ...rest
}: IProductDetail) {
  return (
    <View
      className='flex justify-between w-44 items-center bg-gray-200 border rounded-md border-gray-300 mb-3'
      {...rest}
    >
      <View className='basis-1/2 p-5 static'>
        <Image source={img} />
        <View className='absolute -right-4 top-2 bg-white p-1 rounded-full'>
          <TouchableOpacity>
            <Heart
              size={18}
              color={favorite ? '#EF4444' : '#000'}
              weight={favorite ? 'fill' : 'regular'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className='basis-1/2 bg-white w-full px-3 rounded-b-md py-1'>
        <View>
          <Text className='font-bold'>{title}</Text>
        </View>
        <View>
          <Text className='text-xs text-gray-400 py-1'>{description}</Text>
        </View>
        <View>
          <View className='flex-row space-x-2 items-center'>
            <Text className='font-bold'>{price}</Text>
            {oldPrice && (
              <Text className='text-xs text-gray-400 line-through'>
                {oldPrice}
              </Text>
            )}
            {discount && (
              <Text className='text-xs text-emerald-500'>{discount}</Text>
            )}
          </View>
        </View>
        <View className='items-center '>
          <TouchableOpacity>
            <View className='border border-emerald-500 rounded-2xl my-2 mt-4 py-1 px-8'>
              <Text className='text-emerald-500'>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
