import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {black, primaryColor, white} from '../../utility/AppColor';
import MenuHeader from '../Menu/MenuHeader';

const DATA = [
  {
    id: '1',
    title: 'Everyday',
    info: 'Homely meals',
    icon: require('../Images/Healthy.png'),
    header: '20 Min delivery',
  },
  {
    id: '2',
    title: 'Offers',
    info: 'Upyo 60% OFF',
    icon: require('../Images/offers.png'),
  },
  {
    id: '3',
    title: 'Legends',
    info: 'Iconic parties',
    icon: require('../Images/lengends.png'),
  },
  {
    id: '4',
    title: 'Large Deals',
    info: 'on large order',
    icon: require('../Images/largeD.png'),
  },
  // Add more data as needed
];

export default function ExploreCards() {
  const renderItem = ({item}) => (
    <View style={[styles.card, styles.boxShadow]}>
      {item.header && <Text style={styles.header}>{item.header}</Text>}
      <Image source={item.icon} style={styles.imageStyle} />
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={styles.label}>{item.info}</Text>
    </View>
  );

  return (
    <View>
      <MenuHeader title={'EXPORE'} />
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  card: {
    width: 150,
    height: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginRight: 20,
    borderRadius: 30,
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  header: {
    backgroundColor: primaryColor,
    color: white,
    fontSize: 16,
    width: 150,
    padding: 6,
    textAlign: 'center',
    fontWeight: '600',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: black,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: black,
    marginBottom: 10,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
