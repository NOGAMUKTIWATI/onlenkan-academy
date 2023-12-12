import React from 'react'
import Link from "./navbar/link";
import { Icon } from "@iconify/react";


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
    <div className="p-2 border-b  top-0 ">
      <div className="flex justify-between">
        <div className="logo-brand">
          <img src="./images/logo/logo.png" alt="logo-brand" className="w-32" />
        </div>
        <div className="menu mt-5 ">
          <ul className="flex gap-5">
            {menus.map((item, index) => (
              <li className="menu-item active" key={index}>
                <Link href={item.href} name={item.name} icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>

        <div className="notif gap-5 a">
          
          <Icon icon="akar-icons:bell" />
        </div>

        <div className="avatar flex gap-5 justify-between">
          <img
            src="./images/kelas/avatar.png"
            alt="avatar"
            className="mt-5 mr-8 w-10 h-10 rounded-full"
          />
          <p className="text-sm text-gray-400 inline-block">Muhammad Yunus</p>
        </div>
      </div>
    </div>
  );
}
