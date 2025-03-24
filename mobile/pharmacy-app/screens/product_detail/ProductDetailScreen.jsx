import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Platform, ToastAndroid, Animated} from "react-native";
import {useRouter} from 'expo-router';
import {Icon} from "@rneui/themed";
import {useCart} from '@/contexts/CartContext';
import apiService from "@/services/apiService";

// Custom Toast component for iOS
const Toast = ({visible, message}) => {
    const opacity = useState(new Animated.Value(0))[0];

    useEffect(() => {
        if (visible) {
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.delay(1500),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <Animated.View style={[styles.toast, {opacity}]}>
            <Text style={styles.toastText}>{message}</Text>
        </Animated.View>
    );
};

// Sample product data - in a real app, you would fetch this based on the ID
const getProductById = (id: string) => {
    const products = {
        '1': {
            name: 'Paracetamol',
            description: 'Thuốc giảm đau, hạ sốt',
            price: '15.000 đ',
            longDescription: 'Paracetamol là thuốc giảm đau, hạ sốt được sử dụng để điều trị các triệu chứng đau từ nhẹ đến trung bình và sốt. Thuốc có tác dụng giảm đau bằng cách ức chế tổng hợp prostaglandin trong hệ thần kinh trung ương và tác dụng hạ sốt bằng cách tác động lên trung tâm điều hòa nhiệt ở vùng dưới đồi.'
        },
        '2': {
            name: 'Vitamin C',
            description: 'Bổ sung vitamin C tăng cường sức đề kháng',
            price: '45.000 đ',
            longDescription: 'Vitamin C là một loại vitamin tan trong nước và là một chất chống oxy hóa mạnh, giúp bảo vệ các tế bào khỏi tác hại của các gốc tự do. Vitamin C cũng cần thiết cho sự phát triển và sửa chữa của tất cả các mô trong cơ thể, giúp hấp thu sắt, tăng cường hệ miễn dịch.'
        },
        // Add more products as needed
    };

    return products[id] || {name: 'Sản phẩm không tồn tại', description: '', price: '', longDescription: ''};
};

function ProductDetailScreen({id}: { id: string }) {
    const router = useRouter();
    const {addToCart} = useCart();
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    let [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await apiService.get(`/products/slug/${id}`);  //Using slug
                if (response.code === 200) {
                    setProduct(response.data);
                }
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
            }
        };
        fetchProductDetail().then();
    }, [id]);

    const handleAddToCart = () => {
        addToCart({
            id,
            name: product.name,
            description: product.description,
            price: product.price
        });

        // Show toast message
        const message = `Đã thêm ${product.name} vào giỏ hàng`;

        if (Platform.OS === 'android') {
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                0,
                50
            );
        } else {
            setToastMessage(message);
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 2000);
        }
    };

    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <Toast visible={toastVisible} message={toastMessage}/>}

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Icon name="arrow-left" type="feather" size={24}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chi tiết sản phẩm</Text>
                <View style={styles.placeholder}/>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.productImage}/>

                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>

                    <View style={styles.divider}/>

                    <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
                    <Text style={styles.productDescription}>{product.longDescription}</Text>

                    <View style={styles.divider}/>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={handleAddToCart}
                >
                    <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
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
    content: {
        flex: 1,
    },
    productImage: {
        height: 300,
        backgroundColor: 'rgba(217, 217, 217, 1)',
    },
    productInfo: {
        padding: 16,
        backgroundColor: 'white',
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
    footer: {
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    addToCartButton: {
        backgroundColor: '#3b82f6',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    toast: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        borderRadius: 5,
        zIndex: 9999,
        alignItems: 'center',
    },
    toastText: {
        color: 'white',
        fontSize: 14,
    },
});

export default ProductDetailScreen;