"use client";
import TableTransaksi from "../_components/table/transaksi";

export default function page() {
  const table = [
    {
      no: 1,
      image: "../images/kelas/card-1.jpg",
      title: "Mastering HTML CSS",
      subtitle: "Front-End Web Developer",
      harga: "Rp. 99,000",
      status: "Kelas Belum Aktif",
    },
  ];

  return (
    <div className="h-screen">
      <TableTransaksi
        thead={["#", "Informasi E-Course", "Harga", "Status", ""]}
        td={table}
      />
    </div>
  );
}
