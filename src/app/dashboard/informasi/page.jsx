"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function page() {
  return (
    <div className="informasi">
      <h2 className="font-bold pl-3 text-start text-2xl py-5">
        Informasi Terkini
      </h2>
      <table className="w-full p-5">
        <thead className="bg-white p-5 rounded">
          <th>#</th>
          <th>Tanggal</th>
          <th>Informasi</th>
        </thead>
        <tbody className="bg-white p-5 rounded">
          <tr>
            <td>
              <Icon
                icon="akar-icons:info"
                className="text-blue-500"
              />
            </td>
            <td>12 Desember 2022</td>
            <td className="w-full p-5">
              <div className="space-y-4">
                <h3 className="uppercase font-bold">
                  Promo Kelas Spesial Member!
                </h3>
                <div>
                  <h3 className="uppercase text-3xl text-gray-500">
                    Spesial Member yang udah beli kelas Fullstack Developer!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    ratione obcaecati asperiores quos maiores molestiae sed
                    voluptas, exercitationem eum, maxime alias dolorem ducimus
                    explicabo quia porro in perferendis ipsa. Fuga.
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus inventore, itaque ullam a ratione veritatis.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
