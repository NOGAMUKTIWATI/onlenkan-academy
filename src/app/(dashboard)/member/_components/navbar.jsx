"use client";

import React from "react";
import Link from "./navbar/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
// import { usePathname } from "next/navigation";

export default function navbar() {
  const menus = [
    {
      name: "Dashboard",
      icon: "akar-icons:dashboard",
      href: "/member",
    },
    {
      name: "Informasi Terbaru",
      icon: "material-symbols:info-outline",
      href: "/member/informasi",
    },
    {
      name: "Kelas Saya",
      icon: "bi:display",
      href: "/member/kelas",
    },
    {
      name: "Source Code",
      icon: "akar-icons:briefcase",
      href: "/member/source-code",
    },
    {
      name: "Transaksi",
      icon: "akar-icons:basket",
      href: "/member/transaksi",
    },
  ];

  const img = "../images/";

  return (
    <div className="p-2 border-b top-0">
      <div className="flex justify-between">
        {/* logo */}
        <div className="flex gap-5 ">
          <div className="logo-brand pl-5">
            <img
              src={img + "logo/logo.png"}
              alt="logo-brand"
              className="w-32"
            />
          </div>
          {/* menu */}
          <div className="menu mt-6">
            <ul className="flex gap-10">
              {menus.map((item, index) => (
                <li
                  className="menu-item active"
                  key={index}
                >
                  <Link
                    // className={
                    //   router.pathname === item.href
                    //     ? "text-primary"
                    //     : "text-gray-500"
                    // }
                    href={item.href}
                    name={item.name}
                    icon={item.icon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="profile flex pr-5 gap-5  max-w-[300px]">
          <Icon
            className="mt-5 text-2xl"
            icon="akar-icons:bell"
          />
          <img
            src={img + "kelas/avatar.png"}
            alt="avatar"
            className="mt-3 rounded-full w-10 h-10"
          />
          <p className="mt-6 text-sm text-gray-400">Muhammad Yunus</p>
        </div>
      </div>
    </div>
  );
}
