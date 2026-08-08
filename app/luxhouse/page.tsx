import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function LuxHouse() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#1D1D1B]">
      <Navbar />
      <Hero />
      <Philosophy />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}