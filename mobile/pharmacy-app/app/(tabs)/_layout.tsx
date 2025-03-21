import React from 'react';
import { Tabs } from 'expo-router';
import { Icon } from '@rneui/themed';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#3b82f6' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => <Icon name="home" type="feather" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Yêu thích',
          tabBarIcon: ({ color }) => <Icon name="heart" type="feather" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Giỏ hàng',
          tabBarIcon: ({ color }) => <Icon name="shopping-cart" type="feather" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color }) => <Icon name="user" type="feather" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}