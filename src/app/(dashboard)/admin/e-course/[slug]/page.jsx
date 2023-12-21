"use client";
import DetailCourse from "../../_components/table/detail-course";
const items = [
  {
    title:
      "Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride",
    slug: "fullstack-web-developer-belajar-dari-0-hingga-mahir",
    children: [
      {
        tanggal: "07 Desember 2023",
        informasi: {
          nama: "Muhammad Hafids Choirul Rizal",
          email: "hafirizal 2007@gmail.com",
          nomor: "6292244670865",
        },
        harga: "Rp. 0",
        promo: false,
        payment: false,
        videoTerakhir: "Membuar Profile Page",
        status: ["Active", "No Active"],
      },
      {
        tanggal: "07 Desember 2023",
        informasi: {
          nama: "M.fakhrur Rozi Nur Kholid",
          email: "fakhrurrozi@gmail.com",
          nomor: "6287752494052",
        },
        harga: "Rp. 0",
        promo: false,
        payment: false,
        videoTerakhir: "Membuat Homepage Part 2",
        status: ["Active", "No Active"],
      },
      {
        tanggal: "13 November 2023",
        informasi: {
          nama: "Dwi Wibowo",
          email: "dwiwrk@gmail.com",
          nomor: "628788294983",
        },
        harga: "Rp.250.000",
        promo: false,
        payment: true,
        videoTerakhir: "HTML Introduction",
        status: ["Active", "No Active"],
      },
      {
        tanggal: "25 Oktober 2023",
        informasi: {
          nama: "SANUSI",
          email: "sanusijaelani86@gmail.com",
          nomor: "6285691842027",
        },
        harga: "Rp.350.000",
        promo: true,
        payment: true,
        videoTerakhir: "Heading, Paragraf, dan Link pada HTML",
        status: ["Active", "No Active"],
      },
      {
        tanggal: "25 Oktober 2023",
        informasi: {
          nama: "SANUSI",
          email: "sanusijaelani86@gmail.com",
          nomor: "6285691842027",
        },
        harga: "Rp.350.000",
        promo: true,
        payment: true,
        videoTerakhir: "Heading, Paragraf, dan Link pada HTML",
        status: ["Active", "No Active"],
      },
      {
        tanggal: "25 Oktober 2023",
        informasi: {
          nama: "SANUSI",
          email: "sanusijaelani86@gmail.com",
          nomor: "6285691842027",
        },
        harga: "Rp.350.000",
        promo: true,
        payment: true,
        videoTerakhir: "Heading, Paragraf, dan Link pada HTML",
        status: ["Active", "No Active"],
      },
    ],
  },
];

export default function page({ params }) {
  const data = items.find((item) => item.slug === params.slug);
  return (
    <div className="container max-w-7xl top-0 pt-7 mx-auto">
      <div className="head p-2 ">
        <h2 className="font-bold">{data.title}</h2>
      </div>
      <div className="p-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-5 py-2 bg-white border rounded-md"
        />
      </div>
      <div className="p-2">
        <DetailCourse
          thead={[
            "Tanggal Bergabung",
            "Informasi Personal",
            "Harga Beli",
            "Video Terakhir",
            "Status",
          ]}
          td={data.children}
        />
      </div>
    </div>
  );
}
