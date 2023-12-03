export default function Hero() {
  return (
    <div className="container mx-auto lg:max-w-6xl max-w-full  lg:mt-40 mt-20">
      <div className="p-5 mt-10 max-w-4xl space-y-5">
        <h2 className="text-6xl leading-tight mb-3 font-bold tracking-tighter">
          Bangun Karir Impianmu Bersama
          <span className="text-primary"> Onlenkan Academy</span>
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Tingkatkan Kemampuan Coding Kamu Sekaligus Menambah Jaringan Kamu
          Bersama Programmer Hebat Lainnya.
        </p>
        <div className="space-x-4">
          <button className="btn btn-primary">Dashboard Saya</button>
          <button className="btn-secondary">Lihat List Kelas</button>
        </div>
      </div>
    </div>
  );
}
