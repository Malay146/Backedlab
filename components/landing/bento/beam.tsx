"use client";
import Logo from "@/components/Icons/logo/logo";
import Figma from "@/components/Icons/techstack/figma";
import NextJS from "@/components/Icons/techstack/nextjs";
import ReactIcon from "@/components/Icons/techstack/react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Rocket, ThumbsUp, TrendingUp } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";

const Beam = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const figmaRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const nodeClass =
    "flex size-10 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-sm relative";
  return (
    <>
      {/* Beam canvas */}
      <div
        ref={containerRef}
        className="relative h-60 sm:h-55 w-full max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mask-b-from-50% overflow-hidden px-2 sm:px-0"
      >
        {/* LEFT — Tech stack */}
        <div className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-10">
          <div ref={figmaRef} className={nodeClass}>
            <Figma className="size-5" />
          </div>
          <div ref={nextRef} className={nodeClass}>
            <NextJS className="size-5" />
          </div>
          <div ref={reactRef} className={nodeClass}>
            <ReactIcon className="size-5" />
          </div>
        </div>

        {/* CENTER — Studio */}
        <div
          ref={centerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex size-12 sm:size-16 items-center justify-center rounded-full bg-white border border-zinc-300 shadow-md"
        >
          <div className="size-16 relative">
            <Image src="/logo.png" alt="Studio Logo" layout="fill" objectFit="contain" />
          </div>
        </div>

        {/* RIGHT — Outcomes */}
        <div className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-10">
          <div ref={launchRef} className={nodeClass}>
              <Rocket className="size-5 text-zinc-700" />
          </div>
          <div ref={growthRef} className={nodeClass}>
            <TrendingUp className="size-5 text-zinc-700" />
          </div>
          <div ref={feedbackRef} className={nodeClass}>
            <ThumbsUp className="size-5 text-zinc-700" />
          </div>
        </div>

        {/* BEAMS — In */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={figmaRef}
            toRef={centerRef}
            curvature={30}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={nextRef}
            toRef={centerRef}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={reactRef}
            toRef={centerRef}
            curvature={-30}
          />

          {/* BEAMS — Out */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={launchRef}
            curvature={90}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={growthRef}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={feedbackRef}
            curvature={-90}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 hidden sm:block">
          One Studio
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-zinc-900">
          End-to-end execution.
        </h2>
        <p className="mt-2 text-zinc-600 max-w-xs sm:max-w-md">
          Everything flows through your team — strategy, design, development,
          delivery.
        </p>
      </div>
    </>
  );
};

export default Beam;
