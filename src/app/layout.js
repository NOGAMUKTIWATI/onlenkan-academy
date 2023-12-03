import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Onlenkan.com - Academy | Website Building for business",
  description: "Create business website with Onlenkan.com for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
