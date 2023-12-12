"use client";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }) {
  return <>
  <Navbar/>
  {children}
  </>;
}
