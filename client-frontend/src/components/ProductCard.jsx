import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ProductCardButton from "./ProductCardButton";

export default function ProductCard(
    {title = "", price="", favor="", sale="", className = ""}) {
    return (
        <Card className="w-56 rounded-lg border border-gray-200 shadow-md flex flex-col overflow-hidden my-2">
            {/* Ảnh sản phẩm */}
            <CardContent className="p-0 flex items-center justify-center h-56 w-full bg-white">
                <img
                    src="https://placehold.co/100x500"
                    alt="Salonpas"
                    className="w-full h-full object-cover"
                />
            </CardContent>

            {/* Nội dung sản phẩm */}
            <CardHeader className="flex-1 p-2">
                <CardTitle className="text-sm font-bold line-clamp-2">
                    {title}
                    {/*Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)*/}
                </CardTitle>
            </CardHeader>

            <CardContent className="text-sm flex flex-col gap-1 p-2">
                <p className="font-extrabold text-blue-600">
                    {price}
                    {/*30.000 đ/Hộp*/}
                </p>
                <p className="text-xs text-gray-500">
                    {favor} | {sale}
                    {/*Yêu thích 51.8k | Đã bán 8.4k*/}
                </p>
            </CardContent>

            {/* Nút chọn sản phẩm */}
            <CardFooter className="p-2">
                <ProductCardButton label="Chọn sản phẩm"/>
            </CardFooter>
        </Card>
    );
}
