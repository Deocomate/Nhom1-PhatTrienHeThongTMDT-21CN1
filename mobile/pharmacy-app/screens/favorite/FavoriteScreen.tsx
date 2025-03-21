import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sản phẩm yêu thích</Text>
            <View style={styles.content}>
                <Text style={styles.emptyText}>Bạn chưa có sản phẩm yêu thích nào</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    }
});