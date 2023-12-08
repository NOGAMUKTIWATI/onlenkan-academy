import Hero from "./components/home/hero";
import Kelas from "./components/home/kelas";
import Artikel from "./components/home/artikel";
import WhyChooseUs from "./components/home/why-choose-us";

export default function Home() {
  return (
    <div className="home">
      <div className="home container mx-auto lg:max-w-6xl max-w-full lg:mt-40 mt-20">
        <Hero />
        <Kelas />
        <Artikel />
      </div>
      <div className="value ">
        <WhyChooseUs />
      </div>
    </div>
  );
}
