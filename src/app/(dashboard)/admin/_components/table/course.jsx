"use client";

import { Icon } from "@iconify/react";
import Link from "../course/link";

export default function course({ thead, td }) {
  return (
    <div className=" w-full rounded-md">
      <div className="grid bg-white p-5 grid-cols-5 w-full">
        {thead.map((item, index) => (
          <div className={item === "Action" ? "text-center" : "text-left"}>
            <h2 key={index}>{item}</h2>
          </div>
        ))}
      </div>
      <div className="w-full mt-5">
        <div className="w-full space-y-5">
          {td.map((item, i) => (
            <div
              className="bg-white rounded-md grid p-3 gap-5 grid-cols-5 justify-center text-left"
              key={i}
            >
              {/* # */}
              <div className="text-left flex justify-center">
                <img src={item.image} className="w-52 rounded-md" alt="" />
              </div>
              {/* <img src={item.image} className="w-52" alt={item.title} /> */}
              {/* Informasi E-Course */}
              <div className="space-y-4">
                <Link
                  href={"/admin/e-course/" + item.slug}
                  // className={"text-left"}
                  name={item.title}
                />
                <h4 className="font-medium text-sm capitalize text-gray-500">
                  {item.subtitle}
                </h4>
              </div>
              {/* harga */}
              <div className=" w-full text-left mt-5">
                <p className="text-lg">{item.price}</p>
                <br />
                <p className="block text-sm">
                  <strike className="text-red-500">{item.discount}</strike>
                </p>
              </div>
              {/* Jumlah Member */}
              <div className="flex justify-start text-left w-full mt-8">
                <p>{item.member}</p>
              </div>
              {/* Action */}
              <div className="flex gap-4 text-left w-full justify-center mt-8">
                <div>
                  <button className="flex gap-2 bg-detail text-white px-5 py-2 rounded-md">
                    <Icon icon="tabler:edit" />
                    Edit
                  </button>
                </div>
                <div>
                  <button className="flex gap-2 bg-red-500 text-white px-5 py-2 rounded-md mr-8">
                    <Icon icon="mdi:trash-outline" />
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
