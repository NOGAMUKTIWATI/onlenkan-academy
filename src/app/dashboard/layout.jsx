"use client";
import Header from "./_components/header/header";
export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
