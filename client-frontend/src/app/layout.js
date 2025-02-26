import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
export const metadata = {
  title: "Nhà thuốc online An Khang",
  description: "Nhà thuốc online An Khang by Nhóm 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >

      {/* header */}
      <Header/>

      <main>
          {children}
      </main>

      {/* footer */}
      <Footer/>
      </body>
    </html>
  );
}
