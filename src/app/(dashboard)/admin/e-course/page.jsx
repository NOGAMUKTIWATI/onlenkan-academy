"use client";

import { Icon } from "@iconify/react";
import TableCourse from "../_components/table/course";
import ModalForm from "../_components/modal/form";
import { useState, Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
      slug: "fullstack-web-developer-belajar-dari-0-hingga-mahir",
    },
    {
      id: 2,
      image: "../images/kelas/card-1.jpg",
      title: "Mastering Laravel | From Zero to Hero",
      subtitle: "Full-Stack Web Developer",
      price: "Rp. 210,000",
      discount: "Rp. 300,000",
      member: "7 Member",
      slug: "mastering-laravel-from-zero-to-hero",
    },
    {
      id: 3,
      image: "../images/kelas/card-1.jpg",
      title: "BUNDLING PACKAGE | Full Stack Developer + Mastering Laravel",
      subtitle: "Full-Stack Web Developer",
      price: "Rp. 400,000",
      discount: "Rp. 650,000",
      member: "2 Member",
      slug: "bundling-package-full-stack-developer-mastering-laravel",
    },
    {
      id: 3,
      image: "../images/kelas/card-1.jpg",
      title: "Mastering HTML CSS",
      subtitle: "Front End Web Developer",
      price: "Rp. 120,000",
      discount: "Rp. 280,000",
      member: "4 Member",
      slug: "mastering-html-css",
    },
    {
      id: 4,
      image: "../images/kelas/card-1.jpg",
      title: "Kelas JavaScript Dasar untuk Pemula",
      subtitle: "Front End Web Developer",
      price: "Rp. 120,000",
      discount: "Rp. 300,000",
      member: "0 Member",
      slug: "kelas-javascript-dasar-untuk-pemula",
    },
  ];

  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="p-5">

      <ModalForm isVisible={modal} onClose={() => setModal(false)}>
        <div className="font-bold text-2xl">Buat Baru</div>
        <div className="mt-5 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="input-box space-y-4">
              <label htmlFor="">Kategori</label>
              <input
                type="text"
                className="px-5 py-2 border outline-none rounded w-full"
              />
            </div>
            <div className="input-box space-y-4">
              <label htmlFor="">
                Judul Courses <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="px-5 py-2 border outline-none rounded w-full"
              />
            </div>
            <div className="input-box space-y-4">
              <label htmlFor="">
                Harga E-Course<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="px-5 py-2 border outline-none rounded w-full"
              />
            </div>
            <div className="input-box space-y-4">
              <label htmlFor="">Harga Diskon (Jika ada)</label>
              <input
                type="text"
                className="px-5 py-2 border outline-none rounded w-full"
              />
            </div>
          </div>
          <div className="">
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                editor.ui.view.editable.element.style.minHeight = "300px";
              }}
              onChange={(event) => {
                console.log(event);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="input-box space-y-4">
              <label htmlFor="">Gambar Utama</label>
              <input
                type="file"
                className="px-5 py-2 border outline-none rounded w-full"
              />
            </div>
            <div className="input-box space-y-4">
              <label htmlFor="">Pilih Mentor</label>
              <input
                type="text"
                className="px-5 py-2 border outline-none rounded w-full"
                value="Noga Muktiwati"
              />
            </div>
          </div>
          <div className="input-box space-y-4">
            <label htmlFor="">Link Group</label>
            <input
              type="text"
              className="px-5 py-2 border outline-none rounded w-full"
              value="Noga Muktiwati"
            />
          </div>
          <button className="px-5 py-2 bg-primary flex gap-5 text-white rounded-md">
            <Icon icon={"ic:baseline-save"} className="text-lg mt-1" />
            Simpan
          </button>
        </div>
      </ModalForm>
      <div className="space-y-4 mb-14 mt-14">
        <h2 className="font-bold text-start text-2xl ">Manajemen Ecourse</h2>
        <p className="mt-5 font-md text-start text-gray-400 text-sm uppercase">
          Manajemen Ecourse Onlenkan Academy
        </p>

        <div className="flex gap-3 ">
          <button
            className="px-5 py-2 flex gap-3 bg-primary text-white rounded-md"
            onClick={toggleModal}
          >
            <Icon icon="material-symbols:add" className="mt-1" />
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
        <div className="flex gap-2">
          <div className="sidebar p-5 space-y-1  h-screen flex-none">
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
              Instructor
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
            {activeTab === 1 && <div className="ecourse-detail">Detail</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
