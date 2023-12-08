"use client";
import { Icon } from "@iconify/react";

export default function footer() {
  return (
    <div className="footer">
      <div className="w-full lg:p-20 pb-20 p-10 bg-theme-footer">
        <div className="container mx-auto h-full">
          <div className="lg:flex grid grid-cols-1 gap-20 justify-center">
            <div className="logo-brand space-y-5 text-left">
              <img
                src="./images/logo/logo.png"
                alt="logo-brand"
                className="w-[200px]"
              />
              <div className="content">
                <p className="paragraf-description text-white max-w-lg text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae suscipit veniam, eaque accusamus nesciunt maiores
                  quia reiciendis eligendi nam excepturi.
                </p>
              </div>
              <div className="sosmed">
                <div className="flex gap-5 text-white justify-start">
                  <div className="icon-fb text-2xl">
                    <Icon icon="mingcute:facebook-fill" />
                  </div>
                  <div className="icon-ig text-2xl">
                    <Icon icon="ri:instagram-fill" />
                  </div>
                  <div className="icon-in text-2xl">
                    <Icon icon="mdi:linkedin" />
                  </div>
                  <div className="yt text-2xl">
                    <Icon icon="mdi:youtube" />
                  </div>
                  <div className="tiktok text-2xl">
                    <Icon icon="ic:baseline-tiktok" />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact space-y-5 lg:mt-10">
              <h1 className="text-white font-bold text-2xl">Kontak Kami</h1>
              <p className="paragraf-description text-white text-xs">
                Jl. Bengawan Solo, Jrebeng Wetan, Kec. Kedopok, Kota
                Probolinggo, Jawa Timur
              </p>
              <p className="text-white text-sm">6285159698221</p>
            </div>
            <div className="subcribe space-y-5 lg:mt-8">
              <h1 className="text-white font-bold text-2xl">Subscribe</h1>
              <p className="paragraf-description text-white text-xs">
                Daftarkan email anda untuk mendapatkan konsultasi gratis senilai
                500rb rupiah
              </p>
              <div className="input-box  bg-white rounded-lg">
                <div className="box-border relative p-2 gap-5">
                  <input
                    type="email"
                    className="p-2 rounded-lg text-sm pl-4 outline-none"
                    placeholder="Masukan Email Anda.."
                  />
                  <button className="absolute right-2 mt-[-1px] text-white font-semibold bg-primary rounded-lg px-5 py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-theme-footer justify-center  border-t p-5">
        <p className="text-white font-semibold text-sm">
          Copyright &copy; 2023 Noga Muktiwati. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
