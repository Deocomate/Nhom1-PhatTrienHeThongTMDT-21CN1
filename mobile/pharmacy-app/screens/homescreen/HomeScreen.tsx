import {useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Link} from "expo-router";
import {useAuth} from "@/contexts/AuthContext";

export default function HomeScreen() {

    console.log("Home Screen")

    let {user} = useAuth()
    console.log(user)

    return (
        <View className="flex-1 bg-white items-center">
            <Text className="text-9xl text-green-500 font-bold"
                  onPress={() => {
                      console.log("Rerender")
                  }}
            >Hello</Text>
            <Link href="/cart">Cart</Link>
            <Link href="/product/abc">Product Detail</Link>
        </View>
    );
}