import { View, Text } from 'react-native';
import React from 'react';
import ProductDetail from './ProductDetail';

import Pote1 from '../assets/pote1.png';
import Pote2 from '../assets/pote2.png';

const items = [
  {
    id: 1,
    img: Pote1,
    title: 'Accu-check Active Test Strip',
    description: 'pump bottle of 500 gm bottle',
    price: '$821',
    oldPrice: '$989',
    discount: '17%off',
    favorite: false,
  },
  {
    id: 2,
    img: Pote2,
    title: 'Accu-check Active Test Strip',
    description: 'pump bottle of 200 gm bottle',
    price: '$186',
    oldPrice: '$495',
    discount: '62%off',
    favorite: true,
  },
  {
    id: 3,
    img: Pote2,
    title: 'Accu-check Active Test Strip',
    description: 'pump bottle of 200 gm bottle',
    price: '$186',
    oldPrice: '$495',
    discount: '62%off',
    favorite: true,
  },
  {
    id: 4,
    img: Pote1,
    title: 'Accu-check Active Test Strip',
    description: 'pump bottle of 500 gm bottle',
    price: '$821',
    oldPrice: '$989',
    discount: '17%off',
    favorite: false,
  },
  {
    id: 5,
    img: Pote1,
    title: 'Accu-check Active Test Strip',
    description: 'pump bottle of 500 gm bottle',
    price: '$821',
    oldPrice: '$989',
    discount: '17%off',
    favorite: false,
  },
];
export default function Products() {
  return (
    <View className='px-3 pb-2 bg-white mt-3'>
      <View className='flex flex-row justify-between items-center py-2'>
        <Text className='font-bold'>Products </Text>
      </View>
      <View className='flex-row justify-between flex-wrap'>
        {items.map((item) => (
          <ProductDetail
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            oldPrice={item.oldPrice}
            discount={item.discount}
            favorite={item.favorite}
          />
        ))}
      </View>
    </View>
  );
}
