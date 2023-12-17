"use client";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="lg:max-w-full bg-biru-muda">{children}</div>
    </div>
  );
}
