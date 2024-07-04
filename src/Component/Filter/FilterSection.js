import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Define the filter options as an array of objects
const filterOptions = [
  {
    key: 'sort',
    text: 'Sort',
    icon: {name: 'filter-list-alt', size: 20, color: '#000'},
    additionalIcon: {name: 'expand-more', size: 20, color: '#000'},
  },
  {key: 'rating', text: 'Rating 4.0+'},
  {key: 'veg', text: 'Pure Veg'},
  {key: 'gourmet', text: 'Gourmet'},
  {key: 'cuisines', text: 'Cuisines'},
];

export default function FilterSection() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {filterOptions.map(filter => (
        <TouchableOpacity key={filter.key} style={styles.filterButton}>
          {filter.icon && (
            <Icon
              name={filter.icon.name}
              size={filter.icon.size}
              color={filter.icon.color}
              style={styles.icon}
            />
          )}
          <Text style={styles.filterText}>{filter.text}</Text>
          {filter.additionalIcon && (
            <Icon
              name={filter.additionalIcon.name}
              size={filter.additionalIcon.size}
              color={filter.additionalIcon.color}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  filterButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});
