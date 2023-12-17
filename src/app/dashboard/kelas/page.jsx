"use client";

import Card from "../_components/kelas/card";

const items = [
  {
    id: 1,
    image: "../images/kelas/card-1.jpg",
    badge: "Aktif",
    category: "Full-Stack Web Developer",
    title:
      "Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride",
    progress: "Progress Belajar",
    description: ": Membuat Homepage Part 1",
  },
  {
    id: 2,
    image: "../images/kelas/card-1.jpg",
    badge: "Tidak Aktif",
    category: "Front-End Web Developer",
    title: "Mastering HTML CSS",
    progress: "Progress Belajar",
    description: ": Background",
  },
];

export default function page() {
  return (
    <div className="kelas lg:h-screen p-5">
      <div className="p-2">
        <h2 className="font-semibold text-start text-2xl py-5">Kelas Sayang</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 py-5">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            badge={item.badge}
            category={item.category}
            title={item.title}
            progress={item.progress}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
