"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function instructor({ thead, td }) {
  return (
    <div className="w-full rounded-md">
      <div className="grid bg-white p-5 grid-cols-5 w-full">
        {thead.map((item, index) => {
          return (
            <div
              key={index}
              className={item === "#" ? "text-center" : "text-left"}
            >
              <h2>{item}</h2>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-5">
        <div className="w-full space-y-5">
          {td.map((item, index) => {
            return (
              <div
                key={index}
                className="grid w-full grid-cols-5 p-5 bg-white"
              >
                <div className="flex justify-center">
                  <img
                    src={item.avatar}
                    alt={item.personal.nama}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div className="profile text-left">
                  <h2 className="font-bold text-lg text-black">
                    {item.personal.nama}
                  </h2>
                  <h2 className="font-medium text-sm text-primary">
                    {item.personal.email}
                  </h2>
                  <h2 className="font-medium text-ss text-primary">
                    {item.personal.nomor}
                  </h2>
                </div>
                <div className="asal text-left">
                  <h2 className="font-bold text-lg text-black">
                    {item.asal.title}
                  </h2>
                  <h2 className="font-bold text-sm text-gray-500">
                    {item.asal.subtitle}
                  </h2>
                </div>
                <div className="ecourse text-primary font-semibold">
                  {item.ecourse}
                </div>
                <div className="social-media grid grid-cols-7 gap-5 pr-5">
                  <div>
                    <button className="social-icon">
                      <Icon icon="akar-icons:linkedin-fill" />
                    </button>
                  </div>
                  <div>
                    <button className="social-icon">
                      <Icon icon="iconoir:instagram" />
                    </button>
                  </div>
                  <div>
                    <button className="social-icon">
                      <Icon icon="ic:outline-facebook" />
                    </button>
                  </div>
                  <div>
                    <button className="social-icon">
                      <Icon icon="akar-icons:x-fill" />
                    </button>
                  </div>
                  <div>
                    <button className="social-icon">
                      <Icon icon="ic:baseline-tiktok" />
                    </button>
                  </div>
                  <div>
                    <button className="social-icon">
                      <Icon icon="mingcute:youtube-fill" />
                    </button>
                  </div>
                  <div>
                    <button className="social-icon">
                      <Icon icon="ph:globe" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
