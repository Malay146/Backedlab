import FeatureWork from "@/components/landing/feature-work";
import Hero from "@/components/landing/hero";
import MarqueeCompany from "@/components/landing/marquee-company";
import WhatWeDo from "@/components/landing/whatwedo";
import Navbar from "@/components/navbar";
import Stats from "@/components/landing/stats";
import Bento from "@/components/landing/bento";
import Faq from "@/components/landing/faq";
import Footer from "@/components/footer";
import Timelines from "@/components/landing/timelines";
import Techstack from "@/components/landing/techstack";
import Testimonial from "@/components/landing/testimonial";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-[#111111] flex flex-col items-center relative overflow-hidden">
      <Navbar />
      <Hero />
      <FeatureWork />
      <MarqueeCompany />
      <WhatWeDo />
      <Stats />
      <Timelines />
      <Bento />
      <Techstack />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
