import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { MagnifyingGlass } from 'phosphor-react-native';
import { theme } from '../../tailwind.config';

export default function SearchField() {
  return (
    <View className='flex flex-row flex-1 items-center space-x-2 pb-2 px-3 '>
      <View className='flex-row flex-1 space-x-2 bg-gray-100 p-2 rounded-md border border-gray-400 items-center'>
        <MagnifyingGlass size={20} color='gray' />
        <TextInput
          placeholder='Search Medicine and Product'
          keyboardType='default'
          placeholderTextColor={theme.colors.gray[300]}
        ></TextInput>
      </View>
    </View>
  );
}
