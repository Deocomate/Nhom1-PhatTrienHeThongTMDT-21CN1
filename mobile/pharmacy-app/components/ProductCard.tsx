import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";

export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  onPress?: () => void;
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <View style={styles.root}>
      <View style={styles.productImage}>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={props.onAddToFavorite}
        >
          <Icon
            name="heart"
            type="feather"
            color="#000"
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.productInfo}>
        <View style={styles.frame5}>
          <View style={styles.frame4}>
            <View style={styles.frame3}>
              <Text 
                style={styles.productName} 
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {props.name}
              </Text>
              {/* <TouchableOpacity onPress={props.onAddToCart}>
                <Icon
                  name="shopping-cart"
                  type="feather"
                  color="#000"
                  size={20}
                />
              </TouchableOpacity> */}
            </View>
            <Text 
              style={styles.productDescription} 
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {props.description}
            </Text>
          </View>
          <Text style={styles.productPrice}>
            {props.price}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  productImage: {
    flexDirection: 'row',
    aspectRatio: 1, // Makes it a perfect square
    width: '100%',
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 8,
    shadowOffset: {"width": 0, "height": 1},
    elevation: 4,
  },
  favoriteButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 32, // Fixed height for 2 lines
  },
  productInfo: {
    paddingTop: 16,
    paddingLeft: 8,
    paddingBottom: 16,
    paddingRight: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 8,
    shadowOffset: {"width": 0, "height": 1},
    elevation: 4,
  },
  frame5: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 16,
  },
  frame4: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 7,
  },
  frame3: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productDescription: {
    width: '100%',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
    height: 32, // Fixed height for 2 lines
  },
  productPrice: {
    width: '100%',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: -0.24,
  },
});