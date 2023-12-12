import React from 'react'
import Link from "./navbar/link";

export default function navbar() {
    const menus = [
      {
        name: "Dashboard",
        icon: "akar-icons:dashboard",
        href: "/dashboard",
      },
      {
        name: "Informasi Terbaru",
        icon: "material-symbols:info-outline",
        href: "/dashboard/informasi",
      },
      {
        name: "Kelas Saya",
        icon: "bi:display",
        href: "/dashboard/informasi",
      },
      {
        name: "Sertifikat",
        icon: "arcticons:note-it",
        href: "/dashboard/sertifikat",
      },
      {
        name: "Karya Saya",
        icon: "arcticons:note-it",
        href: "/dashboard/karya",
      },
      {
        name: "Event",
        icon: "tabler:calendar-time",
        href: "/dashboard/event",
      },
      {
        name: "Review Kelas",
        icon: "tabler:calendar-time",
        href: "/dashboard/review",
      },
      {
        name: "Source Code",
        icon: "akar-icons:briefcase",
        href: "/dashboard/source",
      },
      {
        name: "Transaksi",
        icon: "akar-icons:basket",
        href: "/dashboard/transaksi",
      },
    ];
  return (
    <div className="p-2 border-b sticky top-0 ">
      <div className="flex justify-between">
        <div className="logo-brand">
          <img src="./images/logo/logo.png" alt="logo-brand" className="w-32" />
        </div>
        <div className="menu mt-5 ">
          <ul className="flex gap-5">
            {menus.map((item, index) => (
              <li className="menu-item active" key={index}>
                <Link 
                  href={item.href}
                  name={item.name}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
