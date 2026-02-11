"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
// import { motion } from "motion/react";
import Link from "next/link";
import PixelBlast from "../ui/PixelBlast";

const Hero = () => {
  return (
    <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-24 py-10 md:py-32 flex items-center justify-center  mt-12 md:mt-16 bg-white relative z-10 rounded-t-2xl
    rounded-b-4xl 
   md:mask-x-from-90% md:mask-y-from-80%">
      {/* Left content */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-7">
        <div className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight flex flex-col items-center justify-center">
          <p className="font-mono text-[10px] text-zinc-700 font-semibold tracking-normal leading-none px-2 py-1.5 bg-zinc-100 inline-block rounded-md shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] mb-4">
            <span className="inline-block size-2 rounded-full bg-blue-700 mr-1 animate-pulse" />
            BUILDING FOR THE INTERNET, WORLDWIDE
          </p>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-inter leading-none tracking-tighter max-w-4xl text-center">
              Crafting Intelligent, Scalable, and User-Focused Solutions.
            </h1>
          </div>
        </div>

        <p className="max-w-4xl text-zinc-700 text-base md:text-lg leading-relaxed text-center">
          We specialize in creating modern digital experiences through
          thoughtful design, robust engineering, and innovative technology. From
          concept to deployment, we help brands grow online.
        </p>

        <div className="flex flex-row items-stretch sm:items-center gap-4">
          <div className="group flex gap-3 justify-center items-center font-inter font-medium bg-blue-600 px-4 py-2 rounded-md cursor-pointer text-sm md:text-base relative z-10">
            <button className="inline-block cursor-pointer">
              <span className="text-white chroma-text-out chroma-text-out-animate">
                Start a Project
              </span>
            </button>
            <ArrowRight className="size-4 md:size-5 inline-block text-white" />
          </div>

          <Link
            href="/works"
            className="font-inter border border-zinc-700 px-4 py-2 text-black group rounded-md cursor-pointer text-sm md:text-base font-medium"
          >
            <button className="cursor-pointer chroma-text-out chroma-text-out-animate text-black">
              See Our Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
