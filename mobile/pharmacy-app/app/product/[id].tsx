import {useLocalSearchParams} from "expo-router";
import ProductDetailScreen from "@/screens/product_detail/ProductDetailScreen";

export default function ProductDetailScreenRoute() {

    const {id} = useLocalSearchParams();

    return <ProductDetailScreen id={id}/>;

}