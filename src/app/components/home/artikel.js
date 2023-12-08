"use client";

import Card from "@/app/components/home/artikel/card";

const items = [
  {
    id: 1,
    image: "./images/kelas/card-artikel-1.jpg",
    category: "Laravel",
    title: "Fitur Tersembunyi di Laravel",
    description:
      "Ada beberapa fitur keren di Laravel yang mungkin belum kamu ketahui hingga 2023 ini.",
    avatar: "./images/kelas/avatar.png",
    name: "Muhammad Yunus",
    tanggal: "06 Dec 2023",
  },
  {
    id: 2,
    image: "./images/kelas/card-artikel-2.jpg",
    category: "Web Development",
    title: "5 Cara Belajar Coding yang Efektif untuk Pemula",
    description:
      "Bagaimana cara belajar coding yang efektif buat kamu yang pemula?",
    avatar: "./images/kelas/avatar.png",
    name: "Muhammad Yunus",
    tanggal: "06 Dec 2023",
  },
  {
    id: 3,
    image: "./images/kelas/card-artikel-3.jpg",
    category: "Web Development",
    title: "Dasar - Dasar HTTP dan HTTPS",
    description: "Kenali Perbedaan HTTP dan HTTPS dengan Lengkap",
    avatar: "./images/kelas/avatar.png",
    name: "Mohammad Sahrullah",
    tanggal: "06 Dec 2023",
  },
];
export default function artikel() {
  return (
    <div className="kelas p-5 mt-20">
      <div className="head-artikel">
        <h1 className="text-3xl text-center font-bold items-center max-w-auto mx-auto">
          Artikel Terakhir
        </h1>
        <p className="text-sm text-center text-gray-400 items-center max-w-auto mx-auto">
          Jika Kamu mempunyai waktu yang singkat, dan ingin dimanfaatkan,
          <br />
          kami telah menyediakan Kamu beberapa artikel
          <br />
          yang mungkin bermanfaat.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-14">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            avatar={item.avatar}
            name={item.name}
            tanggal={item.tanggal}
          />
        ))}
      </div>
    </div>
  );
}
