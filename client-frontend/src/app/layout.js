import "@/styles/globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export const metadata = {
    title: "Nhà thuốc online An Khang", description: "Nhà thuốc online An Khang by Nhóm 1",
};

export default function RootLayout({children}) {
    return (<html lang="vi">
    <body>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </body>
    </html>);
}
