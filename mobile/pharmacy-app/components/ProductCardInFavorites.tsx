import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
import { useFavorites } from '@/contexts/FavoriteContext';
import { useRouter } from 'expo-router';

export interface ProductCardInFavoritesProps {
  id: string;
  name: string;
  description: string;
  price: string;
}

export function ProductCardInFavorites(props: ProductCardInFavoritesProps) {
  const { removeFromFavorites } = useFavorites();
  const router = useRouter();

  const handleCardPress = () => {
    router.push(`/product/${props.id}`);
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handleCardPress} activeOpacity={0.9}>
      <View style={styles.productImage} />
      <View style={styles.productInfo}>
        <View style={styles.info}>
          <View style={styles.headerRow}>
            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
              {props.name}
            </Text>
            <TouchableOpacity 
              onPress={() => removeFromFavorites(props.id)}
              style={styles.deleteButton}
            >
              <Icon name="trash-2" type="feather" size={16} color="#FF3B30" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productDescription} numberOfLines={2} ellipsizeMode="tail">
            {props.description}
          </Text>
          <View style={styles.priceRow}>
            <Text style={styles.productPrice}>
              {props.price}
            </Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <Icon name="shopping-cart" type="feather" size={16} color="#3b82f6" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  productImage: {
    width: 110,
    height: 110,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    backgroundColor: 'rgba(217, 217, 217, 1)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  deleteButton: {
    padding: 4,
  },
  productName: {
    flex: 1,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
    marginRight: 8,
  },
  productDescription: {
    height: 45,
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
  },
  productInfo: {
    flex: 1,
    height: 110,
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 8,
    alignSelf: 'stretch',
    flex: 1,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  productPrice: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
  },
  addToCartButton: {
    padding: 4,
  },
});