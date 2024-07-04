import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {white} from '../../utility/AppColor';

export default function TabBar() {
  const [selectedTab, setSelectedTab] = useState('ALL');

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'ALL' && styles.selectedTab]}
        onPress={() => handleTabChange('ALL')}>
        <Text
          style={[
            styles.tabText,
            selectedTab === 'ALL' && styles.selectedTabText,
          ]}>
          ALL
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'NEAR_FAST' && styles.selectedTab]}
        onPress={() => handleTabChange('NEAR_FAST')}>
        <Text
          style={[
            styles.tabText,
            selectedTab === 'NEAR_FAST' && styles.selectedTabText,
          ]}>
          NEAR & FAST
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFF',
    padding: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  selectedTabText: {
    color: '#fff',
  },
});
