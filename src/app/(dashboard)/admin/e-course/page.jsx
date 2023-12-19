"use client";
import { Icon } from "@iconify/react";
import TableCourse from "../_components/table/course";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function page() {
  const tabel = [
    {
      id: 1,
      image: "../images/kelas/card-1.jpg",
      title:
        "Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride",
      subtitle: "Full-Stack Web Developer",
      price: "Rp. 240,000",
      discount: "Rp. 350,000",
      member: "58 Member",
    },
    {
      id: 2,
      image: "../images/kelas/card-1.jpg",
      title: "Mastering Laravel | From Zero to Hero",
      subtitle: "Full-Stack Web Developer",
      price: "Rp. 210,000",
      discount: "Rp. 300,000",
      member: "7 Member",
    },
    {
      id: 3,
      image: "../images/kelas/card-1.jpg",
      title: "BUNDLING PACKAGE | Full Stack Developer + Mastering Laravel",
      subtitle: "Full-Stack Web Developer",
      price: "Rp. 400,000",
      discount: "Rp. 650,000",
      member: "2 Member",
    },
    {
      id: 3,
      image: "../images/kelas/card-1.jpg",
      title: "Mastering HTML CSS",
      subtitle: "Front End Web Developer",
      price: "Rp. 120,000",
      discount: "Rp. 280,000",
      member: "4 Member",
    },
    {
      id: 4,
      image: "../images/kelas/card-1.jpg",
      title: "Kelas JavaScript Dasar untuk Pemula",
      subtitle: "Front End Web Developer",
      price: "Rp. 120,000",
      discount: "Rp. 300,000",
      member: "0 Member",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="h-screen">
      <h2 className="font-bold text-start text-2xl py-5">Manajemen Ecourse</h2>
      <p className="mt-5 font-bold text-start text-gray-500 text-sm uppercase">
        Manajemen Ecourse Onlenkan Academy
      </p>
      <div className="flex">
        <button className="">
          <Icon icon="material-symbols:add" />
          Buat Baru
        </button>
        <button className="px-5 ">
          <Icon icon="" />
          Kategori
        </button>
        <button className="">
          <Icon icon="" />
          Instructor
        </button>
      </div>
      <div className="flex gap-5">
        <div className="sidebar w-[200px] p-2 space-y-3 bg-white h-screen flex-none">
          <button className="bg-primary w-full text-left text-white px-5 py-2 rounded-md">
            Course
          </button>
          <button className="bg-gray-100 w-full text-left text-black px-5 py-2 rounded-md">
            Course
          </button>
        </div>
        <div className="page">
          <div className="ecourse p-3">
            <TableCourse
              thead={[
                "#",
                "Informasi E-Course",
                "Harga Beli",
                "Jumlah Member",
                "Action",
              ]}
              td={tabel}
            />
          </div>
          <div className="ecourse-detail">Kosong.</div>
        </div>
      </div>
    </div>
  );
}
