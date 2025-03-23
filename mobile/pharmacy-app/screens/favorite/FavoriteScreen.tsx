import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useFavorites} from '@/contexts/FavoriteContext';
import {FavoriteProductCard} from '@/components/FavoriteProductCard';
import {Icon} from "@rneui/themed";
import {useRouter} from 'expo-router';

export default function FavoriteScreen() {
    const {items} = useFavorites();
    const router = useRouter();

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.push('/')}
                >
                    <Icon name="arrow-left" type="feather" size={24}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Sản phẩm yêu thích</Text>
                <View style={styles.placeholder}/>
            </View>

            {items.length === 0 ? (
                <View style={styles.emptyFavorites}>
                    <Text style={styles.emptyFavoritesText}>Bạn chưa có sản phẩm yêu thích nào</Text>
                    <TouchableOpacity
                        style={styles.continueShoppingButton}
                        onPress={() => router.push('/')}
                    >
                        <Text style={styles.continueShoppingButtonText}>Tiếp tục mua sắm</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={items}
                    renderItem={({item}) => (
                        <FavoriteProductCard
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.favoritesList}
                />
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
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    placeholder: {
        width: 40,
    },
    emptyFavorites: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyFavoritesText: {
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
    favoritesList: {
        padding: 8,
    },
    favoriteItemContainer: {
        marginBottom: 8,
        marginHorizontal: 8,
    },
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
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
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
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
    deleteButton: {
        padding: 4,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    productPrice: {
        color: 'rgba(0, 0, 0, 1)',
        fontFamily: 'Mulish',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: -0.24,
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
});