"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

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
    title: "Artikel",
    href: "/",
    active: false,
  },
];

export default function header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenus = () => {
    setToggleMenu((current) => !current);
  };

  return (
    <div className="header-layout p-2 fixed w-full bg-white top-0 border-b z-40">
      <header className="container mx-auto lg:max-w-6xl max-w-full">
        <div className="flex gap-5 justify-between">
          <div className="flex gap-5">
            <div className="logo-brand">
              <img
                src="./images/logo/logo.png"
                alt="Logo Onlenkan Gan"
                className="w-32"
              />
            </div>
            <div
              className={`menu mt-6 lg:auto h-screen lg:w-auto w-full 
              ${
                toggleMenu ? "block" : "lg:block hidden"
              }`}
            >
              <ul className="lg:flex block gap-8 justify-start text-gray-400">
                {menus.map((item, index) => (
                  <li className="menu-item">
                    <a
                      href=""
                      key={index}
                      className={item.active ? "active-menu" : ""}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:hidden block mt-6">
            <button onClick={toggleMenus}>
              <Icon icon="solar:hamburger-menu-outline" />
            </button>
          </div>

          <div className="contact mt-4 lg:block hidden">
            <div className="flex gap-5">
              <button className="btn font-bold">Masuk</button>
              <button className="btn-light text-btn-grey text-primary font-bold">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
