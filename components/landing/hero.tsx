"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import TextAnimation from "./text-animation";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-30 mt-20 md:mt-24">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 md:gap-6"
      >
        <div className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[10px] text-zinc-700 font-semibold tracking-normal leading-none px-2 py-1.5 bg-zinc-100 inline-block rounded-md shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] mb-4"
          >
            {" "}
            <span className="inline-block size-2 rounded-full bg-blue-700 mr-1 animate-pulse" />
            BASED ON THE INTERNET
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Designing systems.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building interfaces.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-sans max-w-lg text-zinc-700 text-base md:text-lg leading-relaxed"
        >
          We're a design and development studio crafting minimal,
          high-performance websites and products for modern brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-row items-stretch sm:items-center gap-4"
        >
          <div className="flex gap-3 justify-center items-center font-sans font-medium bg-blue-600 px-4 py-2 text-white rounded-md cursor-pointer text-sm md:text-base">
            <button className="inline-block">Start a Project</button>
            <ArrowRight className="size-4 md:size-5 inline-block" />{" "}
          </div>

          <Link href="/works" className="font-sans border border-zinc-700 px-4 py-2 text-black rounded-md cursor-pointer text-sm md:text-base ">
            <button className="font-medium">
              See Our Work
            </button>
          </Link>
          
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex items-center justify-center overflow-visible"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
          w-full h-80 sm:h-96 md:w-100 md:h-120 border border-zinc-400 relative
          mask-[radial-gradient(ellipse_at_center,black_85%,transparent)]
          "
        >
          <GradientBlobs />
          <GridPattern className="animate-fade-in-slow text-blue-300" />
          <div className="w-full h-full flex items-center justify-center relative z-10">
            <iframe
              src="https://lottie.host/embed/22245704-2600-4ae1-be57-88c6fdffc72f/T92kolPC5a.lottie"
              className="size-full"
            />
          </div>
        </motion.div>

        {/* floats OUTSIDE mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden xl:block size-30 absolute border-b border-r border-zinc-400 -top-30 -left-16  mask-[linear-gradient(135deg,black_70%,transparent),linear-gradient(to_right,transparent,black_50%),linear-gradient(to_bottom,transparent,black_50%)]
    mask-intersect"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="hidden xl:block size-30 absolute border-t border-l border-zinc-400 -bottom-30 -right-16  mask-[linear-gradient(315deg,black_70%,transparent),linear-gradient(to_left,transparent,black_50%),linear-gradient(to_top,transparent,black_50%)]
    mask-intersect"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

const GridPattern = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("absolute inset-0 w-full h-full opacity-30", className)}
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          x="0"
          y="0"
          width="25"
          height="25"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

const GradientBlobs = () => {
  return (
    <>
      {/* Blob 1 */}
      <div
        className="
          absolute -top-20 -left-20
          size-96
          bg-[radial-gradient(circle_at_30%_30%,#3b82f6,transparent_60%)]
          opacity-10
          blur-3xl
          animate-[float_12s_ease-in-out_infinite]
        "
      />

      {/* Blob 2 */}
      <div
        className="
          absolute -bottom-24 -right-24
          size-112
          bg-[radial-gradient(circle_at_70%_70%,#6366f1,transparent_60%)]
          opacity-20
          blur-3xl
          animate-[float_16s_ease-in-out_infinite_reverse]
        "
      />
    </>
  );
};
