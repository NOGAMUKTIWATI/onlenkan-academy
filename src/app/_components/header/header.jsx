"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

const menus = [
  {
    title: "Beranda",
    href: "/",
    active: true,
  },
  {
    title: "Kelas",
    href: "/",
    active: false,
  },
  {
    title: "Event",
    href: "/",
    active: false,
  },
  {
    title: "Source Code",
    href: "/",
    active: false,
  },
  {
    title: "Article",
    href: "/",
    active: false,
  },
];

export default function navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenus = () => {
    setToggleMenu((current) => !current);
  };

  return (
    <div className="header-layout p-2 sticky w-full bg-white top-0 border-b z-40">
      <header className="container mx-auto lg:max-w-6xl max-w-full">
        <div className="flex gap-5 justify-between">
          <div className="flex gap-5">
            <div className="logo-brand">
              <img
                src="./images/logo/logo.png"
                alt=""
                className="w-32"
              />
            </div>
            <div
              className={`menu mt-6 lg:h-auto h-screen lg:w-auto w-full  ml-5
            ${toggleMenu ? "block" : "lg:block hidden"}`}
            >
              <ul className="lg:flex block gap-5 justify-center text-gray-500 text-sm">
                {menus.map((item, index) => (
                  <li
                    className="menu-item"
                    key={index}
                  >
                    <Link
                      href={item.href}
                      className={item.active ? "active-menu" : ""}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:hidden block mt-6">
            <button onClick={toggleMenus}>
              <Icon
                icon="radix-icons:hamburger-menu"
                className="text-2xl mr-3"
              />
            </button>
          </div>

          <div className="contact mt-4  space-x-4 lg:block hidden">
            <button className="btn font-bold">Masuk</button>
            <button className="btn-light font-bold">Daftar</button>
          </div>
        </div>
      </header>
    </div>
  );
}
