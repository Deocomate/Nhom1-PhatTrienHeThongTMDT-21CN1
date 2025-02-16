"use client";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";


const suggestions = ["Paracetamol", "Ibuprofen", "Vitamin C", "Khẩu trang", "Siro ho"];

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const filteredSuggestions = suggestions.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative w-full max-w-3xl px-2">


            {/* Thanh search bar + dropdown */}
            <div className="relative w-full">
                {/* Ô tìm kiếm */}
                <div className="relative z-20">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                        type="text"
                        placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="pl-12 pr-4 h-9 border border-gray-300 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                {/* Dropdown kết quả tìm kiếm */}
                {query && (
                    <Card className="absolute top-full left-0 w-full bg-white p-2 mt-1 z-50 shadow-lg border border-gray-200">
                        {filteredSuggestions.length > 0 ? (
                            filteredSuggestions.map((s, index) => (
                                <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                                    {s}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500 text-sm">Không có kết quả phù hợp</div>
                        )}
                    </Card>
                )}


            </div>
        </div>
    );
}
