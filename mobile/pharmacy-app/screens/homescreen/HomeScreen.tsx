import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import { ProductCard } from '@/components/ProductCard';

// Sample product data
const sampleProducts = [
  {
    id: '1',
    name: 'Paracetamol ParacetamolParacetamolParacetamolParacetamolParacetamol',
    description: 'Thuốc giảm đau, hạ sốt',
    price: '15.000 đ'
  },
  {
    id: '2',
    name: 'Vitamin C',
    description: 'Bổ sung vitamin C tăng cường sức đề kháng',
    price: '45.000 đ'
  },
  {
    id: '3',
    name: 'Dầu gió xanh',
    description: 'Giảm đau nhức, cảm lạnh',
    price: '25.000 đ'
  },
  {
    id: '4',
    name: 'Băng cá nhân',
    description: 'Băng dán vết thương nhỏ',
    price: '35.000 đ'
  },
  {
    id: '5',
    name: 'Nước muối sinh lý',
    description: 'Vệ sinh mũi, mắt, vết thương',
    price: '20.000 đ'
  },
  {
    id: '6',
    name: 'Oresol',
    description: 'Bù nước và điện giải',
    price: '18.000 đ'
  },
];

// Calculate card width based on screen width
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 24) / 2; // 8px left padding + 8px right padding + 8px between cards

export default function HomeScreen() {
  const renderItem = ({ item, index }) => {
    return (
      <View style={[
        styles.productCardContainer,
        { width: cardWidth }
      ]}>
        <ProductCard
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          onAddToCart={() => console.log('Add to cart:', item.id)}
          onAddToFavorite={() => console.log('Add to favorite:', item.id)}
          onPress={() => console.log('Product pressed:', item.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang chủ</Text>
        <Text style={styles.headerTitle}>Nhà thuốc An Khang</Text>
      </View>
      
      <FlatList
        data={sampleProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productGrid: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  productCardContainer: {
    marginBottom: 8,
  }
});