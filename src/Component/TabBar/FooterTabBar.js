import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FooterTabBar = ({onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState('Delivery');

  const handleTabChange = tab => {
    setSelectedTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Delivery' && styles.selectedTab]}
        onPress={() => handleTabChange('Delivery')}>
        <Icon
          name="delivery-dining"
          size={24}
          color={selectedTab === 'Delivery' ? '#D32F2F' : '#000'}
        />
        <Text
          style={
            selectedTab === 'Delivery' ? styles.selectedTabText : styles.tabText
          }>
          Delivery
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Dining' && styles.selectedTab]}
        onPress={() => handleTabChange('Dining')}>
        <Icon
          name="restaurant"
          size={24}
          color={selectedTab === 'Dining' ? '#D32F2F' : '#000'}
        />
        <Text
          style={
            selectedTab === 'Dining' ? styles.selectedTabText : styles.tabText
          }>
          Dining
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Live' && styles.selectedTab]}
        onPress={() => handleTabChange('Live')}>
        <Icon
          name="live-tv"
          size={24}
          color={selectedTab === 'Live' ? '#D32F2F' : '#000'}
        />
        <Text
          style={
            selectedTab === 'Live' ? styles.selectedTabText : styles.tabText
          }>
          Live
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#000',
  },
  selectedTab: {
    borderBottomColor: '#D32F2F',
    borderBottomWidth: 2,
  },
  selectedTabText: {
    fontSize: 12,
    color: '#D32F2F',
  },
});

export default FooterTabBar;
