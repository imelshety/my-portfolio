import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Rabie",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assests/logo/logo.jpg"
          type="image/jpg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
       
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
