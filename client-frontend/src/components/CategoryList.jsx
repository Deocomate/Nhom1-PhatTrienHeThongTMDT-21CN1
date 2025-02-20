import CategoryItem from "./CategoryItem";
import {categories} from "../../public/data/categories";


export default function CategoryList() {
    return (
        <div className="max-w-screen-xl mx-auto py-4">
            <h2 className="text-xl font-bold mb-4">Danh mục nổi bật</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
                {categories.map((category) => (
                    <CategoryItem key={category.id} name={category.name} icon={category.icon} />
                ))}
            </div>
        </div>
    );
}
