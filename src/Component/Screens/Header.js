import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {primaryColor} from '../../utility/AppColor';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Icon name="location-on" size={20} color="#fff" />
        <Text style={styles.locationText}>Islampur Village</Text>
        <Icon name="keyboard-arrow-down" size={20} color="#fff" />
      </View>
      <View style={styles.rightContainer}>
        <Icon name="person" size={24} color="#fff" />
        <Text style={styles.vegMode}>VEG MODE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: primaryColor,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#fff',
    marginLeft: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vegMode: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default Header;
