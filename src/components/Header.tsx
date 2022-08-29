import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Bell, Heart, List } from 'phosphor-react-native';

export default function Header() {
  return (
    <View className='flex flex-row justify-between px-3 h-12 items-center'>
      <View className='flex-row '>
        <TouchableOpacity>
          <View className='p-1'>
            <List size={30} weight='bold' />
          </View>
        </TouchableOpacity>
        <View className='justify-center'>
          <Text className='italic font-bold text-lg'>TNKart</Text>
        </View>
      </View>

      <View className='flex-row'>
        <View className='p-1 bg-blue-200 rounded-full mr-1'>
          <TouchableOpacity>
            <Heart size={20} weight='thin' />
          </TouchableOpacity>
        </View>
        <View className='p-1 bg-blue-200 rounded-full mr-1'>
          <TouchableOpacity>
            <Bell size={20} weight='thin' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}