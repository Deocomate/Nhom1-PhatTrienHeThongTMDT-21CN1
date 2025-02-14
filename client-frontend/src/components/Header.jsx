import SearchBar from "@/components/SearchBar";

export default function Header() {
    return (
        <header className="bg-green-700 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
            {/* Search bar */}
                <SearchBar/>
            </div>
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
            </div>
        </header>
    );
}