import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MenuHeader({title}) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#B0B0B0',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    opacity: 0.5,
  },
  textWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    opacity: 0.6,
  },
});
