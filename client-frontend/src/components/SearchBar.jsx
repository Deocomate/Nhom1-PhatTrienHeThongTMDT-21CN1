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
        <div className="relative w-full max-w-md">
            {/* thanh search bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black size-1/2" />
                <Input
                    type="text"
                    placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-black-100"
                />
            </div>

            {/* card dropdown kết quả tìm kiếm */}
            {query && (
                <Card className="absolute w-full mt-1 bg-white shadow-lg rounded-sm p-2">
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((s, index) => (
                            <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                                {s}
                            </div>
                        ))
                    ) : (
                        <div className="p-1 pl-2 text-gray-500">Không tìm thấy</div>
                    )}
                </Card>
            )}
        </div>
    );
}
