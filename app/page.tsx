"use client";
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
import { useOnScreen } from "@/hooks/useOnScreen";
import dynamic from "next/dynamic";
import Footer2 from "@/components/footer-2";
import Bento2 from "@/components/landing/bento-2";

const PixelBlast = dynamic(
  () => import("@/components/ui/PixelBlast"),
  { ssr: false }
);


export default function Home() {

  const {ref, visible} = useOnScreen();

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-[#111111] flex flex-col items-center relative overflow-hidden">
      <Navbar />

      <div
        id="hero"
        className="w-full flex items-center justify-center relative"
        ref={ref}
      >
        <PixelBlast
          variant="square"
          pixelSize={3}
          colors={['#FF0000', '#993300', '#996600', '#00FF00', '#0000FF', '#4B0082', '#9400D3']}
          patternScale={2.5}
          patternDensity={1}
          rippleSpeed={0.3}
          rippleThickness={0.01}
          rippleIntensityScale={0.5}
          speed={0.8}
          transparent={true}
          edgeFade={0.2}
          className="absolute w-full h-full inset-0 pointer-events-none mt-16"
        />
        <Hero />
      </div>

      <div id="features" className="w-full scroll-mt-20">
        <FeatureWork />
      </div>

      <MarqueeCompany />

      <div id="services" className="w-full">
        <WhatWeDo />
      </div>

      <Stats />
      <Timelines />
      <Bento />
      <Bento2 />
      <Techstack />
      <Testimonial />

      <div id="faq" className="w-full scroll-mt-20">
        <Faq />
      </div>

      <Footer />

      <Footer2 />
    </div>
  );
}
