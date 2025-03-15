// app/layout.js
import "@/styles/globals.css";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import Script from "next/script";
import {AuthProvider} from '@/auth/AuthProvider';
import {CartProvider} from '@/contexts/CartContext';
import {WishListProvider} from "@/contexts/WishListContext";
import {Toast} from "react-bootstrap";
import {ToastContainer} from "react-toastify"; // Import CartProvider

export const metadata = {
    title: "Nhà thuốc online An Khang", description: "Nhà thuốc online An Khang by Nhóm 1",
};

export default function RootLayout({children}) {
    return (<html lang="vi">
    <body>
    <AuthProvider>
        <CartProvider>
            <WishListProvider>
                <div className={"body-wrapper"}>
                    <Header></Header>
                    {children}
                    <Footer></Footer>
                </div>
                <ToastContainer></ToastContainer>
                <Script src="/assets/js/template.bundle.js"></Script>
            </WishListProvider>
        </CartProvider>
    </AuthProvider>
    </body>
    </html>);
}