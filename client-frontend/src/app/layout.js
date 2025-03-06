import "@/styles/globals.css";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import Script from "next/script";

export const metadata = {
    title: "Nhà thuốc online An Khang", description: "Nhà thuốc online An Khang by Nhóm 1",
};

export default function RootLayout({ children }) {
    return (<html lang="vi">
        <body>
            <div className={"body-wrapper"}>
                <Header></Header>
                {children}
                <Footer></Footer>
            </div>
            <Script src="/assets/js/template.bundle.js"></Script>
        </body>
    </html>);
}
