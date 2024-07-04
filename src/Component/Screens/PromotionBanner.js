import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const PromotionBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/promotion.png')}
        style={styles.bannerImage}
      />
      <Text style={styles.title}>Zomato Restaurant Awards 2024</Text>
      <View style={{bottom: -40}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vote now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D32F2F',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: -20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PromotionBanner;
