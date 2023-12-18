"use client";
import Card from "./_components/overview/card";

export default function page() {
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

  return (
    <div className="p-5 h-screen">
      <h2 className="font-bold text-start text-2xl py-5">
        Selamat Datang Kembali, Muhammad Yunus
      </h2>
      <p className="mt-5 font-bold text-start text-gray-500 text-sm UPPERCASE">
        OVERVIEW
      </p>

      <div className="overview grid grid-cols-1 lg:grid-cols-4 gap-5 py-2">
        {items.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
