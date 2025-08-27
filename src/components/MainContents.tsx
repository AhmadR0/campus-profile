import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import CTA from "../sections/CTA";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Faculty from "../sections/Faculty";

export default function MainContents() {
  return (
     <main className="flex-1">
      <Hero />
      <Highlights />
      <About />
      <Stats />
      <Faculty />
      <CTA />
    </main>
  );
}
