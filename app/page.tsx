import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Calculator from "./components/Calculator";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Background />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <Calculator/>
      <CTA />
      <Footer />
    </main>
  );
}