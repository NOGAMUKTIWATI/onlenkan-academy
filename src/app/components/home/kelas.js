"use client";

import Card from "@/app/components/home/kelas/card";

const items = [
  {
    id: 1,
    image: "./images/kelas/card-1.jpg",
    category: "Front-End Web Developer",
    title: "Kelas Javacript Dasar untuk Pemula",
    price: "Rp. 150,000",
    discount: "Rp. 300,000",
  },
  {
    id: 2,
    image: "./images/kelas/card-2.jpg",
    category: "Front-End Web Developer",
    title: "Mastering HTML CSS",
    price: "Rp. 150. 000",
    discount: "Rp. 280,000",
  },
  {
    id: 3,
    image: "./images/kelas/card-3.jpg",
    category: "Full-Stack Web Developer",
    title: "BUNDLING PACKAGE | Full Stack Developer + Mastering Laravel",
    price: "Rp.500,000",
    discount: "Rp. 650,000",
  },
  {
    id: 4,
    image: "./images/kelas/card-4.jpg",
    category: "Full-Stack Web Developer",
    title: "Mastering Laravel | From  Zero to Hero",
    price: "Rp. 300,000",
  },
  {
    id: 5,
    image: "./images/kelas/card-5.jpg",
    category: "Full Stack Web Developer",
    title: "Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride",
    price: "Rp. 350,000",
  },
];

export default function kelas() {
  return (
    <div className="kelas mt-20 p-5">
      <div className="head-kelas">
        <h1 className="text-3xl font-bold">Pilih Kelas</h1>
        <p className="text-sm text-gray-400">
          Pilih kelas unggulan untuk tingkatkan keahlian kamu!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-14">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            category={item.category}
            title={item.title}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}
