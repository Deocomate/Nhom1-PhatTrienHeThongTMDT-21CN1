import { Button } from "@/components/ui/button";

export default function ProductCardButton({ label = "Chọn sản phẩm", className = ""}) {
    return (
        <Button
            className={`bg-green-700 text-white px-6 py-1 rounded-lg hover:bg-green-900 w-52 ${className}`}
            >
            {label}
        </Button>
    );
}