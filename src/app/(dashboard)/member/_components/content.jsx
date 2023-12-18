"use client";

import CardOverview from "./overview/card";
import CardKelas from "./kelas/card";

const items = [
  {
    id: 1,
    icon: "material-symbols-light:nest-display-outline",
    title: "2 Kelas",
    description: "Kelas yang kamu miliki.",
  },
  {
    id: 2,
    icon: "material-symbols-light:frame-source",
    title: "6 Source",
    description: "Source code yang dimiliki.",
  },
  {
    id: 3,
    icon: "material-symbols:event",
    title: "0 Event",
    description: "Event yang kamu ikuti",
  },
  {
    id: 4,
    icon: "lets-icons:file-dock-fill",
    title: "0 Sertifikat",
    description: "Fitur ini akan segera aktif",
  },
];

const itemsKelas = [
  {
    id: 1,
    image: "././images/kelas/card-5.jpg",
    badge: "Aktif",
    category: "Full-Stack Web Developer",
    title:
      "Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride",
    progress: "Progress Belajar",
    description: ": Membuat Homepage Part 1",
  },
  {
    id: 2,
    image: "././images/kelas/card-2.jpg",
    badge: "Tidak Aktif",
    category: "Front-End Web Developer",
    title: "Mastering HTML CSS",
    progress: "Progress Belajar",
    description: ": Background",
  },
];

export default function content() {
  return (
    <div className="content">
      <h2 className="font-bold text-start text-2xl py-5">
        Selamat Datang Kembali, Muhammad Yunus
      </h2>
      <p className="mt-5 font-bold text-start text-gray-500 text-sm UPPERCASE">
        OVERVIEW
      </p>

      {/* Overview */}
      <div className="overview grid grid-cols-1 lg:grid-cols-4 gap-5 py-2">
        {items.map((item, index) => (
          <CardOverview
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/*  Kelas */}
      <div className="kelas grid grid-cols-1 lg:grid-cols-4 gap-5 py-14">
        {itemsKelas.map((item, index) => (
          <CardKelas
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
