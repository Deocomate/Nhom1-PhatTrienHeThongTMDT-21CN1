import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function ProductCard(
    {id, title = "", price="", favorite="", sale="", className = ""}) {
    return (
        <Card className={`w-full max-w-[224px] h-[380px] rounded-lg border-none shadow-lg flex flex-col my-2 ${className}`}>
            {/* Ảnh sản phẩm */}
            <CardContent className="p-0 flex items-center justify-center h-[224px] w-full bg-white shrink-0 overflow-hidden rounded-t-lg">
                <img
                    src="/500x500.svg"
                    alt="Product"
                    className="w-full h-full object-cover"
                />
            </CardContent>

            <div className="flex flex-col flex-1 min-h-0">
                {/* Nội dung sản phẩm */}
                <CardHeader className="p-2">
                    <CardTitle className="text-sm font-bold h-[40px] leading-5 line-clamp-2">
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="text-sm p-2 pt-0">
                    <p className="font-extrabold text-green-600">
                        {price} đ
                    </p>
                    <p className="text-xs font-bold text-gray-500 truncate">
                        Yêu thích {favorite} | Đã bán {sale}
                    </p>
                </CardContent>

                {/* Nút chọn sản phẩm */}
                <CardFooter className="p-2 mt-auto">
                    <Link href={`/products/${id}`} className="w-full">
                        <Button className="bg-green-700 text-white rounded-md hover:bg-green-900 w-full">
                            Chọn sản phẩm
                        </Button>
                    </Link>
                </CardFooter>
            </div>
        </Card>
    );
}