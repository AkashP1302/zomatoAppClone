import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Category({name, image}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    marginLeft: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: -5,
  },
  text: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
});
