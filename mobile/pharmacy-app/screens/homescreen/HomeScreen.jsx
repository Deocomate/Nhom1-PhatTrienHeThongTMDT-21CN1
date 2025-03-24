import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {SearchBar, Card, Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import apiService from '@/services/apiService';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [pageIndex, setPageIndex] = useState(0);
    const [pageTotal, setPageTotal] = useState(0);
    const [pageSize, setPageSize] = useState(9);
    const [totalElements, setTotalElements] = useState(0);

    const navigation = useNavigation();

    // Hàm để lấy danh sách sản phẩm
    const fetchProducts = async (page = 0, title = '') => {
        setLoading(true);
        try {
            let endpoint = `/products?pageIndex=${page}&pageSize=${pageSize}`;
            if (title && title.trim() !== '') {
                endpoint += `&title=${encodeURIComponent(title)}`;
            }

            const response = await apiService.get(endpoint);

            if (response && response.data) {
                setProducts(response.data.content);
                setPageTotal(response.data.totalPages);
                setPageIndex(response.data.number);
                setTotalElements(response.data.totalElements);
            }
        } catch (error) {
            console.error('Lỗi khi tải sản phẩm:', error);
        } finally {
            setLoading(false);
        }
    };

    // Tải sản phẩm khi component được render lần đầu
    useEffect(() => {
        fetchProducts(0);
    }, []);

    // Xử lý tìm kiếm khi người dùng gửi form
    const handleSearch = () => {
        fetchProducts(0, searchText);
    };

    // Xử lý khi chuyển trang
    const handlePageChange = (newPage) => {
        fetchProducts(newPage, searchText);
    };

    // Format giá tiền theo định dạng VND
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    };

    // Hiển thị một sản phẩm
    const renderProductItem = ({item}) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', {productId: item.id, productSlug: item.slug})}
            className="w-1/2 p-2"
        >
            <Card containerStyle={{margin: 0, padding: 0, borderRadius: 8}}>
                <Image
                    source={{uri: item.thumbnail}}
                    className="h-32 w-full rounded-t-lg"
                    resizeMode="cover"
                />
                <View className="p-3">
                    <Text numberOfLines={2} className="font-bold text-sm">{item.title}</Text>
                    <Text className="text-gray-500 text-xs mt-1">{item.categoryName}</Text>
                    <Text className="text-blue-600 font-bold mt-2">{formatPrice(item.price)}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );

    // Hiển thị thanh phân trang
    const renderPagination = () => {
        const pages = [];

        // Xác định số trang cần hiển thị
        const maxVisiblePages = 5;
        const startPage = Math.max(0, Math.min(pageIndex - Math.floor(maxVisiblePages / 2), pageTotal - maxVisiblePages));
        const endPage = Math.min(startPage + maxVisiblePages - 1, pageTotal - 1);

        // Nút trang trước
        pages.push(
            <TouchableOpacity
                key="prev"
                className={`px-3 py-2 ${pageIndex === 0 ? "opacity-50" : ""}`}
                disabled={pageIndex === 0}
                onPress={() => handlePageChange(pageIndex - 1)}
            >
                <Icon name="chevron-left" type="feather" size={18}/>
            </TouchableOpacity>
        );

        // Các nút số trang
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <TouchableOpacity
                    key={i}
                    className={`px-3 py-2 mx-1 rounded-md ${i === pageIndex ? "bg-blue-500" : "bg-gray-200"}`}
                    onPress={() => handlePageChange(i)}
                >
                    <Text className={`${i === pageIndex ? "text-white" : "text-gray-700"}`}>{i + 1}</Text>
                </TouchableOpacity>
            );
        }

        // Nút trang sau
        pages.push(
            <TouchableOpacity
                key="next"
                className={`px-3 py-2 ${pageIndex === pageTotal - 1 ? "opacity-50" : ""}`}
                disabled={pageIndex === pageTotal - 1}
                onPress={() => handlePageChange(pageIndex + 1)}
            >
                <Icon name="chevron-right" type="feather" size={18}/>
            </TouchableOpacity>
        );

        return (
            <View className="flex-row justify-center items-center mt-4 mb-8">
                {pages}
            </View>
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-4 pt-4">
                {/* Thanh tìm kiếm */}
                <View className="mb-4">
                    <SearchBar
                        placeholder="Tìm kiếm theo tên sản phẩm..."
                        onChangeText={setSearchText}
                        value={searchText}
                        onSubmitEditing={handleSearch}
                        platform="default"
                        containerStyle={{
                            backgroundColor: 'transparent',
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent',
                            padding: 0
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#f2f2f2',
                            borderRadius: 8,
                            height: 40
                        }}
                        inputStyle={{fontSize: 14}}
                        searchIcon={{size: 20}}
                        clearIcon={{size: 20}}
                    />
                    <TouchableOpacity
                        className="absolute right-2 top-2 bg-blue-500 px-3 py-1 rounded-md"
                        onPress={handleSearch}
                    >
                        <Text className="text-white">Tìm</Text>
                    </TouchableOpacity>
                </View>

                {/* Hiển thị kết quả tìm kiếm */}
                {searchText.trim() !== '' && (
                    <View className="mb-4">
                        <Text className="text-sm text-gray-600">
                            Kết quả tìm kiếm cho "{searchText}"
                        </Text>
                    </View>
                )}

                {/* Số lượng kết quả hiển thị */}
                <View className="mb-3">
                    <Text className="text-lg font-bold">Danh sách sản phẩm</Text>
                    {!loading && products.length > 0 && (
                        <Text className="text-sm text-gray-500 mt-1">
                            Hiển
                            thị {pageSize * pageIndex + 1}–{Math.min(pageSize * (pageIndex + 1), totalElements)} của {totalElements} kết
                            quả
                        </Text>
                    )}
                </View>

                {/* Hiển thị danh sách sản phẩm hoặc trạng thái đang tải */}
                {loading ? (
                    <View className="flex-1 items-center justify-center py-10">
                        <ActivityIndicator size="large" color="#3b82f6"/>
                        <Text className="mt-2 text-gray-500">Đang tải sản phẩm...</Text>
                    </View>
                ) : products.length > 0 ? (
                    <FlatList
                        data={products}
                        renderItem={renderProductItem}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 20}}
                        ListFooterComponent={renderPagination}
                    />
                ) : (
                    <View className="flex-1 items-center justify-center py-20">
                        <Icon name="package" type="feather" size={50} color="#d1d5db"/>
                        <Text className="mt-4 text-gray-500 text-center">
                            {searchText.trim() !== ''
                                ? `Không tìm thấy sản phẩm nào với từ khóa "${searchText}"`
                                : "Chưa có sản phẩm nào"}
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}