import SearchBar from "@/components/SearchBar";
import HoverButton from "@/components/HoverButton";

export default function Header() {
    return (
        <header className="bg-green-700 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
                <img src="/pharmacity-logo.svg" alt=""
                className="size-48 p-2"></img>
            {/* Search bar */}
                <SearchBar/>
            {/*   Hover button */}
                <HoverButton/>
            </div>
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
            </div>
        </header>
    );
}