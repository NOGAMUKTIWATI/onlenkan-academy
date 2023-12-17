"use client";
import TableSource from "../_components/table/source";

export default function page() {
  const table = [
    {
      no: 1,
      image: "../images/kelas/card-1.jpg",
      title: "Blog App PHP MySQL - Kelas Full-Stack Developer",
      subtitle: "PHP MySQL",
      harga: "Rp. 150,000",
    },
    {
      no: 2,
      image: "../images/kelas/card-1.jpg",
      title: "Blog App PHP MySQL - Kelas Full-Stack Developer",
      subtitle: "PHP MySQL",
      harga: "Rp. 150,000",
    },
    {
      no: 3,
      image: "../images/kelas/card-1.jpg",
      title: "Blog App PHP MySQL - Kelas Full-Stack Developer",
      subtitle: "PHP MySQL",
      harga: "Rp. 150,000",
    },
    {
      no: 4,
      image: "../images/kelas/card-1.jpg",
      title: "Blog App PHP MySQL - Kelas Full-Stack Developer",
      subtitle: "PHP MySQL",
      harga: "Rp. 150,000",
    },
    {
      no: 5,
      image: "../images/kelas/card-1.jpg",
      title: "Sidebar Menu Dashboard 1",
      subtitle: "HTML CSS",
      harga: "GRATIS",
    },
  ];

  return (
    <div>
      <TableSource thead={["#", "Source Code", "Harga"]} td={table} />
    </div>
  );
}
