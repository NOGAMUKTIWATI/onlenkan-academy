import "./globals.css";

import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";

export const metadata = {
  title: "Onlenkan.com - Academy | Website Building for business",
  description: "Create business website with Onlenkan.com for your business",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body className="font-poppins">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
