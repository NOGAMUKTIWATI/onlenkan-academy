import Link from "next/link";
export default function Hero() {
  return (
    <div className="lg:mt-10 mt-40 p-5 max-w-4xl space-y-5">
      <h2 className="lg:text-6xl text-4xl leading-tight mb-3 font-extrabold tracking-tighter">
        Bangun Karir Impianmu Bersama
        <span className="text-primary"> Onlenkan Academy</span>
      </h2>
      <p className="text-gray-400 max-w-2xl">
        Tingkatkan Kemampuan Coding Kamu Sekaligus Menambah Jaringan Kamu
        Bersama Programmer Hebat Lainnya.
      </p>
      <div className="space-x-4">
        <Link href="/member">
          <button className="btn btn-primary">Dashboard Saya</button>
        </Link>
        <button className="btn-secondary">Lihat List Kelas</button>
      </div>
    </div>
  );
}
