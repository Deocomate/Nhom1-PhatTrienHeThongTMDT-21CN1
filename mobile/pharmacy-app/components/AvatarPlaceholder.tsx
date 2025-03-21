import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AvatarPlaceholderProps {
  size?: number;
  name?: string;
}

export function AvatarPlaceholder({ size = 120, name = 'User' }: AvatarPlaceholderProps) {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <View style={[
      styles.container, 
      { width: size, height: size, borderRadius: size / 2 }
    ]}>
      <Text style={[styles.text, { fontSize: size / 3 }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});