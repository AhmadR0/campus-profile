import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import CTA from "../sections/CTA";
import About from "../sections/About";
import Stats from "../sections/Stats";
// import Faculty from "../sections/Faculty";
import News from "../sections/News";
import Leaders from "../sections/Leaders";
import InformationSystems from "../sections/InformationSystem";

export default function MainContents() {
  return (
     <main className="flex-1">
      <Hero />
      <Stats />
      <About />
      <Highlights />
      <News />
      <Leaders />
      <InformationSystems />
      <CTA />
      

    </main>
  );
}
