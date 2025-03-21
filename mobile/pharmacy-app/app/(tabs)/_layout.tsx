import React, {useEffect} from 'react';
import {Redirect, router, Tabs} from "expo-router";
import {Icon} from "@rneui/themed";
import {View, Text} from 'react-native';
import {useAuth} from "@/contexts/AuthContext";

function _Layout() {

    // let {loading, user} = useAuth()
    //
    // if (!user) {
    //     return <Redirect href="/login"></Redirect>
    // }

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 6,
                    paddingTop: 6,
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderTopColor: '#f0f0f0',
                    elevation: 8,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: -2},
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                },
                tabBarActiveTintColor: '#3b82f6', // blue-500
                tabBarInactiveTintColor: '#9ca3af', // gray-400
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: 2,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Trang chủ",
                    headerShown: false,
                    tabBarIcon: ({focused, color}) => (
                        <View className="items-center justify-center">
                            <Icon
                                name="home"
                                type="feather"
                                color={color}
                                size={24}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Tìm kiếm",
                    headerShown: false,
                    tabBarIcon: ({focused, color}) => (
                        <View className="items-center justify-center">
                            <Icon
                                name="search"
                                type="feather"
                                color={color}
                                size={24}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Giỏ hàng",
                    headerShown: false,
                    tabBarIcon: ({focused, color}) => (
                        <View className="items-center justify-center">
                            <Icon
                                name="shopping-cart"
                                type="feather"
                                color={color}
                                size={24}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Tài khoản",
                    headerShown: false,
                    tabBarIcon: ({focused, color}) => (
                        <View className="items-center justify-center">
                            <Icon
                                name="user"
                                type="feather"
                                color={color}
                                size={24}
                            />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}

export default _Layout;