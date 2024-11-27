import CarbonFootprintSection from "@/components/CarbonFootprint";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TimelineDemo from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <TimelineDemo />
      <CarbonFootprintSection />
      {/* <Footer/> */}
    </>
  );
}
