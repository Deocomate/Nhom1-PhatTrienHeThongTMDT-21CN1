import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ProductCardButton from "./ProductCardButton";
import {Button} from "@/components/ui/button";

export default function ProductCard(
    {title = "", price="", favor="", sale="", className = ""}) {
    return (
        <Card className="w-56 rounded-lg border border-gray-200 shadow-md flex flex-col overflow-hidden my-2">
            {/* Ảnh sản phẩm */}
            <CardContent className="p-0 flex items-center justify-center h-56 w-full bg-white">
                <img
                    src="https://placehold.co/500x500"
                    alt="Salonpas"
                    className="w-full h-full object-cover"
                />
            </CardContent>

            {/* Nội dung sản phẩm */}
            <CardHeader className="flex-1 p-2">
                <CardTitle className="text-sm font-bold line-clamp-2 overflow-hidden h-10">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="text-sm flex flex-col gap-1 p-2">
                <p className="font-extrabold text-blue-600">
                    {price}
                </p>
                <p className="text-xs text-gray-500">
                    {favor} | {sale}
                </p>
            </CardContent>

            {/* Nút chọn sản phẩm */}
            <CardFooter className="p-2">
                <Button
                    className={`bg-blue-700 text-white rounded-lg hover:bg-blue-900 w-52`}
                >
                    Chọn sản phẩm
                </Button>
            </CardFooter>
        </Card>
    );
}