import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import RestaurantCard from '../Cards/RestaurantCard';
import MenuHeader from '../Menu/MenuHeader';

const restaurants = [
  {
    id: '1',
    name: 'Chamail Singh Da Dhaba',
    cuisine: '•North Indian, •Chinese',
    images: [
      require('../Images/MaskGroup.png'),
      require('../Images/food.png'),
      require('../Images/MaskImage.png'),
    ],
    distance: '56 mins • 10 km',
    rating: '3.9',
    offere: '60% OFF up to 120 ₹',
  },
  {
    id: '2',
    name: 'Tinku Fast Food Center',
    cuisine: '•Italian, •Chinese',
    images: [
      require('../Images/food.png'),
      require('../Images/MaskGroup.png'),
      require('../Images/MaskImage.png'),
    ],
    distance: '13 mins • 2 km',
    rating: '4.9',
    offere: '60% OFF up to 100 ₹',
  },
  {
    id: '3',
    name: 'Hanuman Sweets',
    cuisine: '•North, •Sweets',
    images: [
      require('../Images/MaskImage.png'),
      require('../Images/food.png'),
      require('../Images/MaskGroup.png'),
    ],
    distance: '21 mins • 7 km',
    rating: '2.9',
    offere: '30% OFF up to 50 ₹',
  },
  // Add more restaurant data as needed
];

export default function RestaurantList() {
  return (
    <View style={styles.container}>
      <MenuHeader title={'FEATURED'} />
      <FlatList
        data={restaurants}
        renderItem={({item}) => (
          <RestaurantCard
            name={item.name}
            cuisine={item.cuisine}
            images={item.images}
            distance={item.distance}
            rating={item.rating}
            offere={item.offere}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 10,
  },
});
