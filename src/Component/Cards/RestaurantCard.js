import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {white} from '../../utility/AppColor';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RestaurantCard({
  name,
  cuisine,
  images,
  distance,
  rating,
  offere,
}) {
  return (
    <View style={styles.card}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={false}
        style={styles.imageSlider}>
        {images.map((image, index) => (
          <View key={index}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      <Text style={styles.distance}>{distance}</Text>
      <View style={styles.info}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.rating}>
            {rating}
            <Icon name="star" size={14} color="white" />
          </Text>
        </View>
        <Text style={styles.cuisine}>{cuisine}</Text>
        <View
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            color: '#666',
            width: '100%',
            marginBottom: 6,
            opacity: 0.5,
          }}></View>
        <Text style={styles.offere}>
          <Icon name="local-offer" size={15} color="blue" />
          {offere}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imageSlider: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cuisine: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginLeft: 10,
    marginTop: -15,
    marginBottom: 10,
  },
  offere: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: 'blue',
    marginBottom: 10,
  },
  distance: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    backgroundColor: '#fff',
    marginTop: -15,
    width: '35%',
    margin: 3,
    borderTopRightRadius: 30,
    marginRight: 20,
    padding: 7,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: white,
    backgroundColor: '#3CB371',
    padding: 5,
    borderRadius: 10,
  },
});
