"use client";

import Card from "@/app/components/home/why-choose-us/card";

const items = [
  {
    id: 1,
    icon: "akar-icons:edit",
    title: "Mudah Dipelajari",
    description:
      "Materi disusun rapi dengan penyampaian yang mudah diterima sekalipun kepada pemula.",
  },
  {
    id: 2,
    icon: "bytesize:user",
    title: "Mentor Berpengalaman",
    description:
      "Dibimbing oleh mentor atau programmer hebat yang telah berpengalaman lama di bidangnya.",
  },
  {
    id: 3,
    icon: "solar:document-linear",
    title: "Waktu Fleksibel",
    description:
      "Kapanpun dan dimanapun kamu berada , kamu masih bisa mengembangkan skill di Platform.",
  },
  {
    id: 4,
    icon: "material-symbols-light:chat-paste-go-outline-sharp",
    title: "Sertifikat",
    description:
      "Akan selalu ada sertifikat khusus pada setiap kelas yang kamu ikuti, selagi mengumpulkan tugas.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-why-choose-us w-full p-5">
      <div className="container mx-auto lg:max-w-6xl max-w-full mt-20">
        <div className="our-value text-center space-y-3">
          <p className="text-primary uppercase font-bold">Our Value</p>
          <h1 className="text-3xl font-bold">Kenapa Memilih Kami?</h1>
          <p className="text-sm text-gray-400">
            Akan Ada Banyak Sekali Benefit Yang Akan Kamu Dapatkan Ketika
            <br />
            Kamu Mendaftar Menjadi Member Kami, Contoh Besarnya Seperti
            <br />
            Berikut:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-14">
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
    </div>
  );
}
