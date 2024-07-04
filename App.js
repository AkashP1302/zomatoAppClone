import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import SearchBar from './src/Component/Screens/SearchBar';
import CategoryList from './src/Component/Menu/CategoryList';
import ExploreCards from './src/Component/Cards/ExploreCards';
import FilterSection from './src/Component/Filter/FilterSection';
import RestaurantList from './src/Component/Screens/RestaurantList';
import TabBar from './src/Component/MenuTabBar/TabBar';
import Header from './src/Component/Screens/Header';
import FooterTabBar from './src/Component/TabBar/FooterTabBar';
import PromotionBanner from './src/Component/Screens/PromotionBanner';
import {primaryColor} from './src/utility/AppColor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        stickyHeaderIndices={[1, 5]}
        showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.stickyContainer}>
          <SearchBar />
        </View>
        <PromotionBanner />
        <ExploreCards />
        <CategoryList />
        <View style={{}}>
          <TabBar />
        </View>
        <FilterSection />
        <RestaurantList />
      </ScrollView>
      <FooterTabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  stickyContainer: {
    backgroundColor: primaryColor,
    zIndex: 1000000,
  },
});
