import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '@/contexts/CartContext';
import { ProductCardInCart } from '@/components/ProductCardInCart';
import { Icon } from "@rneui/themed";
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const { items, clearCart } = useCart();
  const router = useRouter();
  
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/\D/g, ''));
      return total + (price * item.quantity);
    }, 0).toLocaleString('vi-VN');
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <View style={styles.container}>
<View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-left" type="feather" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
        <View style={styles.placeholder} />
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Giỏ hàng của bạn đang trống</Text>
          <TouchableOpacity 
            style={styles.continueShoppingButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.continueShoppingButtonText}>Tiếp tục mua sắm</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <View style={styles.cartItemContainer}>
                <ProductCardInCart
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.cartList}
          />
          
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Tổng cộng:</Text>
              <Text style={styles.totalAmount}>{calculateTotal()} đ</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 40,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  continueShoppingButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  continueShoppingButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartList: {
    padding: 8,
  },
  cartItemContainer: {
    marginBottom: 8,
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});