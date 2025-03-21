import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStyles, createStyleSheet } from 'styles';
import { Icon } from "@rneui/themed";
import { useFavorites } from '@/contexts/FavoriteContext';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'expo-router';

export interface FavoriteProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  testID?: string;
}

export function FavoriteProductCard(props: FavoriteProductCardProps) {
  const { styles } = useStyles(stylesheet);
  const { removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleRemoveFavorite = () => {
    removeFromFavorites(props.id);
  };

  const handleAddToCart = () => {
    addToCart({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price
    });
  };

  const handlePress = () => {
    router.push(`/product/${props.id}`);
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress} activeOpacity={0.9} testID={props.testID ?? "65:1784"}>
      <View style={styles.productImage} testID="65:1771"/>
      <View style={styles.productInfo} testID="65:1772">
        <View style={styles.info} testID="65:1773">
          <View style={styles.headerRow}>
            <Text style={styles.tenS_nPh_m} numberOfLines={1} ellipsizeMode="tail" testID="65:1775">
              {props.name}
            </Text>
            <TouchableOpacity onPress={handleRemoveFavorite}>
              <Icon name="trash-2" type="feather" size={16} color="#FF3B30" />
            </TouchableOpacity>
          </View>
          <Text style={styles.moT_S_nPh_m} numberOfLines={2} ellipsizeMode="tail" testID="65:1776">
            {props.description}
          </Text>
          <View style={styles.frame7} testID="65:1777">
            <Text style={styles.$000000D} testID="65:1778">
              {props.price}
            </Text>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
              <Icon name="shopping-cart" type="feather" size={16} color="#3b82f6" />
              <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const stylesheet = createStyleSheet(theme => ({
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
  tenS_nPh_m: {
    flex: 1,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
    marginRight: 8,
  },
  moT_S_nPh_m: {
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
    rowGap: 8,
    columnGap: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 11,
    columnGap: 11,
    alignSelf: 'stretch',
    flex: 1,
  },
  frame6: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  $000000D: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
  },
  frame7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  addToCartText: {
    color: '#3b82f6',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
}));