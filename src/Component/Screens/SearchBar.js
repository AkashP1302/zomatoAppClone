import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="#FF6F61" />
      <TextInput
        placeholder="Restaurant name or a dish..."
        style={styles.input}
      />
      <Icon name="mic" size={24} color="#FF6F61" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});
