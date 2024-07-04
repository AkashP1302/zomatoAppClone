import React, {useRef} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import Category from '../Cards/Category';
import MenuHeader from './MenuHeader';

const categories = [
  {id: '1', name: 'Pizza', image: require('../Images/Pizza.png')},
  {id: '2', name: 'Biryani', image: require('../Images/Biryani.png')},
  {id: '3', name: 'Thali', image: require('../Images/Haleem.png')},
  {id: '4', name: 'Chicken', image: require('../Images/Chicken.png')},
  {id: '5', name: 'Burger', image: require('../Images/Biryani.png')},
  {id: '6', name: 'Fried Rice', image: require('../Images/Burger.png')},
  {id: '7', name: 'Pancake', image: require('../Images/Cake.png')},
  {id: '8', name: 'Fried Rice', image: require('../Images/Chicken.png')},
  {id: '9', name: 'Pancake', image: require('../Images/Cake.png')},
  {id: '10', name: 'Fried Rice', image: require('../Images/Burger.png')},
];
const windowWidth = Dimensions.get('window').width;
export default function CategoryList() {
  const firstFlatListRef = useRef(null);
  const secondFlatListRef = useRef(null);

  // Divide the categories into two rows
  const firstRow = categories.filter((_, index) => index % 2 === 0);
  const secondRow = categories.filter((_, index) => index % 2 !== 0);

  // Handle scroll synchronization
  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    if (firstFlatListRef.current) {
      firstFlatListRef.current.scrollToOffset({
        offset: offsetX,
        animated: false,
      });
    }
    if (secondFlatListRef.current) {
      secondFlatListRef.current.scrollToOffset({
        offset: offsetX,
        animated: false,
      });
    }
  };

  // Render a single row with synchronized scroll
  const renderRow = (data, ref) => (
    <FlatList
      horizontal
      data={data}
      renderItem={({item}) => <Category name={item.name} image={item.image} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
      onScroll={handleScroll}
      ref={ref}
      scrollEventThrottle={16}
    />
  );

  return (
    <View style={styles.container}>
      <MenuHeader title={`WHAT'S ON YOUR MIND?`} />
      {renderRow(firstRow, firstFlatListRef)}
      {renderRow(secondRow, secondFlatListRef)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    justifyContent: 'center',
    marginTop: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});
