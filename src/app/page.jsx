import Hero from "./_components/home/hero";
import Kelas from "./_components/home/kelas";
import Artikel from "./_components/home/artikel";
import WhyChooseUs from "./_components/home/why-choose-us";

export const metadata = {
  title: "Onlenkan.com - Academy | Website Building for business",
  description: "Create business website with Onlenkan.com for your business",
};

export default function Home() {
  return (
    <div className="home">
      <div className="container mx-auto lg:max-w-6xl max-w-full mt-20">
        <Hero />
        <Kelas />
        <Artikel />
      </div>
      <div className="value">
        <WhyChooseUs />
      </div>
    </div>
  );
}
