import React from 'react';
import { Redirect, Tabs } from "expo-router";
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from "@/contexts/AuthContext";
import { Icon } from "@rneui/themed";
// The styles import is causing the error, let's use React Native's StyleSheet instead

function _Layout() {
    // let {loading, user} = useAuth()
    //
    // if (!user) {
    //     return <Redirect href="/login"></Redirect>
    // }

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#9ca3af',
                tabBarLabelStyle: styles.tabBarLabel,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Trang chủ",
                    headerShown: false,
                    tabBarIcon: ({focused, color}) => (
                        <View style={styles.iconContainer}>
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
                name="favorite"
                options={{
                    title: "Yêu thích",
                    headerShown: false,
                    tabBarIcon: ({focused, color}) => (
                        <View style={styles.iconContainer}>
                            <Icon
                                name="heart"
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
                        <View style={styles.iconContainer}>
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
                        <View style={styles.iconContainer}>
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

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        paddingBottom: 16,
        paddingTop: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowRadius: 4,
        shadowOffset: {"width": 0, "height": 1},
    },
    tabBarLabel: {
        fontFamily: 'Mulish',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: -0.24,
        marginTop: 8,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        width: 393,
        paddingTop: 16,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 32,
        columnGap: 32,
    },
});

export default _Layout;