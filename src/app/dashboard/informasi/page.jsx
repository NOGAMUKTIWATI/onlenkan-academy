"use client";

import React from "react";
import { Icon } from "@iconify/react";
import TableInformasi from "../_components/table/informasi";

export default function page() {
  const table = [
    {
      no: "1",
      tanggal: "26 November 2022",
      informasi: {
        subtitle: "Tidak ada informasi terkini",
        title: "26 November 2022",
        description: "Tidak ada informasi terkini",
      },
    },
    {
      no: "2",
      tanggal: "26 November 2023",
      informasi: {
        subtitle: "Tidak ada informasi terkini",
        title: "26 November 2022",
        description: "Tidak ada informasi terkini",
      },
    },
  ];

  return (
    <div className="informasi">
      <h2 className="font-bold pl-3 text-start text-2xl py-5">
        Informasi Terkini
      </h2>
      <div className="">
        <TableInformasi
          thead={["No.", "Tanggal", "Informasi"]}
          td={table}
        />
      </div>
    </div>
  );
}
