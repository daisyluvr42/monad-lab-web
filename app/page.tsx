import About from "../components/sections/about/default";
import Contact from "../components/sections/contact/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Hero className="scroll-mt-24" />
      <Items className="scroll-mt-24" />
      <About className="scroll-mt-24" />
      <Contact className="scroll-mt-24" />
      <Footer />
    </main>
  );
}
