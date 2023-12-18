"use client";
import "./globals.css";

import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showLandingComponent =
    pathname.startsWith("/member") || pathname.startsWith("/admin")
      ? false
      : true;

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body className="font-poppins">
        {showLandingComponent && <Header />}
        {children}
        {showLandingComponent && <Footer />}
      </body>
    </html>
  );
}
