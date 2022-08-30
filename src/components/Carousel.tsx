import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
import React from 'react';

import Banner from '../assets/banner.png';
import Banner2 from '../assets/banner2.png';
import { white } from 'tailwindcss/colors';

export default function CarouselComponent() {
  const { width } = Dimensions.get('window');

  const images = [
    {
      source: Banner,
    },
    {
      source: Banner2,
    },
  ];

  return (
    <View className='items-center justify-center py-3'>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: white,
        }}
      >
        {images.map((image, j) => (
          <Image key={j} className='h-auto' source={image.source} />
        ))}
      </ScrollView>
    </View>
  );
}
