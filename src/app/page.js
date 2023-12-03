import Hero from "./components/home/hero";
import Kelas from "./components/home/kelas";
import Artikel from "./components/home/artikel";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Kelas />
      <Artikel />
    </div>
  );
}
