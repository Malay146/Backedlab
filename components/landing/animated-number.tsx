"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "motion/react";
import { cn } from "@/lib/utils";

const AnimatedNumber = ({
  value,
  delay = 0,
  className
}: {
  value: string;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // extract number + suffix
  const number = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");

  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, number, {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo-ish
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, number, suffix, delay, motionValue]);

  return (
    <span
      ref={ref}
      className={cn("font-mono text-4xl tracking-tight text-zinc-900", className)}
    >
      0{suffix}
    </span>
  );
};

export default AnimatedNumber;
