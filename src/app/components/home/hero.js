export default function Hero() {
    return (
      <div className="lg:flex grid grid-cols-1 w-full gap-5 justify-center lg:mt-40 mt-20">
        <div className="p-5 mt-20 max-w-lg space-y-5">
          <h2 className="text-5xl mb-3 font-bold tracking-tighter">
            Bangun Karir Impianmu 
            <br className="hidden md:block" />
            Bersama
            <span className="text-primary">Onlenkan Academy</span>
          </h2>
          <p>
            Tingkatkan Kemampuan Coding Kamu Sekaligus Menambah
            <br />
            Jaringan Kamu Bersama Programmer Hebat Lainnya.
          </p>
        </div>
      </div>
    );
}
