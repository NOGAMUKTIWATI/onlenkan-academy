import Hero from "./components/home/hero";
import Kelas from "./components/home/kelas";
import Artikel from "./components/home/artikel";



export default function Home() {
  return (
    <div className="home">
      <div className="">
        <Hero />
        <Kelas />
        <Artikel />
      </div>
    </div>
  );
}
