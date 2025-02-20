import { Card, CardContent } from "@/components/ui/card";

export default function CategoryItem({ name, icon }) {
    return (
        <Card className="w-40 h-20 flex items-center justify-center rounded-lg shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex flex-col items-center justify-center">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-center mt-2">{name}</span>
            </CardContent>
        </Card>
    );
}
