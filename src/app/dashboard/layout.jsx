"use client";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="lg:h-screen bg-biru-muda">{children}</div>
    </div>
  );
}
