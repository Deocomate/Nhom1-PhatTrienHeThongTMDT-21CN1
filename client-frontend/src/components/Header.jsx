import SearchBar from "@/components/SearchBar";
import NotificationButton from "@/components/NotificationButton";
import CartButton from "@/components/CartButton";
import AccountButton from "@/components/AccountButton";

export default function Header() {
    return (
        <header>
            {/* Phần trên của header */}
            <div className="w-full bg-green-700 py-3">
                <div className="max-w-screen-xl mx-auto px-4 flex items-start justify-between">
                    {/* Logo */}
                    <img
                        src="/pharmacity-logo.svg"
                        alt="Pharmacity Logo"
                        className="w-40 h-auto"
                    />

                    {/* Container chứa SearchBar và nhóm button */}
                    <div className="flex items-start w-full justify-between mx-4">
                        {/* Search Bar */}
                        <div className="flex-1 hidden md:block">
                            <SearchBar />
                        </div>

                        {/* Nhóm button bên phải */}
                        <div className="flex gap-2 self-start">
                            <NotificationButton />
                            <CartButton />
                            <AccountButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần dưới của header */}
            <div className="w-full bg-gray-200 py-2">
                <div className="max-w-screen-xl mx-auto px-4 flex items-center overflow-x-auto gap-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet atque dolore doloribus incidunt maiores mollitia recusandae reiciendis similique unde vero, vitae! Ad amet consequatur labore nemo, officia tempore voluptatum?
                </div>
            </div>
        </header>
    );
}
