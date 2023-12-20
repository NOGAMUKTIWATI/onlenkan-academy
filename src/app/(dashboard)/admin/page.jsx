"use client";
import Card from "./_components/overview/card";
import TableDashboard from "./_components/table/dashboard";

export default function page() {
  const items = [
    {
      id: 1,
      icon: "material-symbols-light:nest-display-outline",
      title: "5 E-Course",
      description: "Kelas yang telah terpublish",
    },
    {
      id: 2,
      icon: "material-symbols-light:frame-source",
      title: "246 Member",
      description: "Member Kelas",
    },
    {
      id: 3,
      icon: "material-symbols:event",
      title: "9 Resource",
      description: "Source code yang terpublish",
    },
    {
      id: 4,
      icon: "lets-icons:file-dock-fill",
      title: "6 Artikel",
      description: "Artikel terpublish pada bulan ini",
    },
  ];

  const table = [
    {
      tanggal: "7 Agustus 2024",
      informasi: {
        name: "Muhammad Yunus",
        email: "muhammadyunus@gmail.com",
        nomor: "6281336210025",
      },
      harga: "Rp. 1.000.000",
      banner: "../images/kelas/card-1.jpg",
      videoTerakhir: "background",
      status: ["Active", "No Active"],
    },
  ];

  return (
    <div className="p-5 h-screen">
      <h2 className="font-bold text-start text-2xl py-5">
        Selamat Datang Kembali, Muhammad Yunus
      </h2>
      <div className="p-1">
        <p className="mt-5 font-bold text-start text-gray-500 text-sm uppercase">
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
      <div className="p-2">
        <p className="mt-3 font-bold text-start text-gray-500 text-sm uppercase">
          MEMBER KELAS TERBARU (1 MEMBER)
        </p>

        <div className="table-dashboard py-2">
          <TableDashboard
            thead={[
              "Tanggal Bergabung",
              "Informasi Personal",
              "Harga Beli",
              "Video Terakhir",
              "Status",
            ]}
            td={table}
          />
        </div>
      </div>
    </div>
  );
}
