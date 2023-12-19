"use client";
import { Icon } from "@iconify/react";
import TableCourse from "../_components/table/course";
import { useState } from "react";
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
    <div className="p-5">
      <div className="space-y-4 mb-14 mt-14">
        <h2 className="font-bold text-start text-2xl ">Manajemen Ecourse</h2>
        <p className="mt-5 font-bold text-start text-gray-500 text-sm uppercase">
          Manajemen Ecourse Onlenkan Academy
        </p>

        <div className="flex gap-3 ">
          <button className="px-5 py-2 flex gap-3 bg-primary text-white rounded-md">
            <Icon
              icon="material-symbols:add"
              className="mt-1"
            />
            Buat Baru
          </button>
          <button className="px-5 py-2 flex gap-3 bg-detail text-white rounded-md">
            <Icon icon="" />
            Kategori
          </button>
          <button className="bg-green-700 px-5 py-2 flex gap-3 text-white rounded-md  ">
            <Icon icon="" />
            Instructor
          </button>
        </div>
      </div>
      <div className="mt-8 space-y-1">
        <h2 className="font-bold ml-5">Menu</h2>
        <div className="flex gap-5">
          <div className="sidebar  p-5 space-y-1  h-screen flex-none">
            <button
              onClick={() => handleTabClick(0)}
              className={`${
                activeTab === 0
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              }  w-full text-left  px-5 py-2 rounded-md`}
            >
              Course
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={`${
                activeTab === 1
                  ? "bg-primary text-white"
                  : "bg-white text-balck"
              } border w-full text-left  px-5 py-2 rounded-md`}
            >
              Detail Course
            </button>
          </div>
          <div className="page">
            {activeTab === 0 && (
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
            )}
            {activeTab === 1 && (
              <div className="ecourse-detail">Detail Kosong.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
