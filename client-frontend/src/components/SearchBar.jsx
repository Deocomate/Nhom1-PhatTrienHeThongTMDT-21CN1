"use client";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";

const suggestions = ["React", "Next.js", "Tailwind CSS", "ShadCN", "JavaScript"];

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const filteredSuggestions = suggestions.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="relative w-full max-w-lg p-2">
            {/* Thanh search bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input
                    type="text"
                    placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-12 pr-4 h-10 border border-gray-300 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
            </div>

            {/* Card dropdown kết quả tìm kiếm */}
            {query && (
                <Card className="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-2">
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((s, index) => (
                            <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                                {s}
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">Không tìm thấy</div>
                    )}
                </Card>
            )}
        </div>
    );
}
