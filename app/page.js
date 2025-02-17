import Hero from "./_component/Hero";
import Distnation from "./_component/Distnation";
import Services from "./_component/Services";
import Contact from "./_component/Contact";
import About from "./_component/About";
import Why from "./_component/Why";
import Loc from "./_component/Loc";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <main className="px-6 lg:px-32 space-y-8">
        <Distnation />
        <Services />
        <Why />
        <div className="-mx-6 lg:-mx-32">
          <Contact />
        </div>
        <div>
          <Loc />
        </div>
        <About />
      </main>
    </div>
  );
}
