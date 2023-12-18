"use client";

import React from "react";
// import { Icon } from "@iconify/react";
import TableInformasi from "../_components/table/informasi";

export default function page() {
  const table = [
    {
      icon: "noto-v1:information",
      tanggal: "30 June 2023",
      informasi: {
        subtitle: "PROMO KELAS SPESIAL MEMBER !",
        title: "Spesial Member yang udah beli Kelas Mastering Laravel !",
        description:
          "Kamu bisa dapetin kelas mastering Laravel cuman Rp. 120.000 aja !! cukup pakai kode Voucher ANNIV120 saat checkout kelas! sampai jumpa di kelas 🙌 ",
      },
    },
    {
      icon: "noto-v1:information",
      tanggal: "30 June 2023",
      informasi: {
        subtitle: "PROMO KELAS SPESIAL MEMBER !",
        title: "Spesial Member yang udah beli kelas Fullstack Developer !",
        description:
          "Kamu bisa dapeting Kelas Full Stack Developer cuman Rp. 230.000 aja !! cukup pakai kode Voucher ANNIV230 saat checkout kelas! Di kelas Full Stack Developer ini kamu juga akan mendapatkan Grup konsultasi khusus buat kamu yang udah beli kelas di Onlenkan Tunggu apalagi? sampai jumpa dikelas 🙌 ",
      },
    },
  ];
  return (
    <div className="informasi">
      <h2 className="font-bold pl-5 text-start text-2xl py-5">
        Informasi Terkini
      </h2>
      <div className="">
        <TableInformasi
          thead={["", "Tanggal", "Informasi"]}
          td={table}
        />
      </div>
    </div>
  );
}
