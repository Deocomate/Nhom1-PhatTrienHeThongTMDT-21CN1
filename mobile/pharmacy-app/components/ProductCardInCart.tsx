import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '@/contexts/CartContext';
import { Icon } from "@rneui/themed";

export interface ProductCardInCartProps {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
}

export function ProductCardInCart(props: ProductCardInCartProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const increaseQuantity = () => {
    updateQuantity(props.id, props.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (props.quantity > 1) {
      updateQuantity(props.id, props.quantity - 1);
    } else {
      removeFromCart(props.id);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.productImage} />
      <View style={styles.productInfo}>
        <View style={styles.info}>
          <View style={styles.headerRow}>
            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
              {props.name}
            </Text>
            <TouchableOpacity 
              onPress={() => removeFromCart(props.id)}
              style={styles.deleteButton}
            >
              <Icon name="trash-2" type="feather" size={16} color="#FF3B30" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productDescription} numberOfLines={2} ellipsizeMode="tail">
            {props.description}
          </Text>
          <View style={styles.frame7}>
            <Text style={styles.productPrice}>
              {props.price}
            </Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity 
                style={styles.quantityButton} 
                onPress={decreaseQuantity}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              
              <Text style={styles.quantityText}>
                {props.quantity}
              </Text>
              
              <TouchableOpacity 
                style={styles.quantityButton} 
                onPress={increaseQuantity}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
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
  frame6: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 8,
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
  frame7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 46,
    height: 15,
  },
  quantityButton: {
    width: 14,
    height: 14,
    backgroundColor: 'rgba(244, 244, 244, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  quantityButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 14,
  },
  quantityText: {
    width: 18,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
  },
});