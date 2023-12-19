import TableDashboard from "@/app/(dashboard)/admin/_components/table/dashboard";

export default function sidemodal() {
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
    <div className="w-[80%] border-l shadow z-40 p-5 h-screen fixed right-0 top-0 bg-white">
      <TableDashboard
        thead={[
          "Tanggal Bergabung",
          "Informasi Personal",
          "Harga Beli",
          ,
          "Video Terakhir",
          "Status",
        ]}
        td={table}
      />
    </div>
  );
}
