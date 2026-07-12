import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import CoreInitiatives from "@/components/CoreInitiatives";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <CoreInitiatives />
        <Insights />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
