import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  title: string;
}
export default function GoBack({ title, ...rest }: IProps) {
  const navigation = useNavigation();
  return (
    <View className='px-3 flex flex-row p-2 items-center' {...rest}>
      <View className='basis-1/6  h-10 items-start justify-center'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft weight='bold' />
        </TouchableOpacity>
      </View>
      <View className='basis-4/6 items-center'>
        <Text className='font-bold text-3xl'>{title}</Text>
      </View>
    </View>
  );
}
