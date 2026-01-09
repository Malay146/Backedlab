"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import React from "react";

const parent = {
  rest: {},
  hover: {},
};

const topText = {
  rest: { y: "0%" },
  hover: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const bottomText = {
  rest: { y: "0%" },
  hover: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const TextAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={parent}
      initial="rest"
      whileHover="hover"
      className={cn(
        "leading-none cursor-pointer will-change-transform",
        className
      )}
    >
      <motion.div className="w-full relative inline-block overflow-hidden">
        {/* Top text (visible initially) */}
        <motion.div variants={topText} className="relative cursor-pointer">
          {children}
        </motion.div>

        {/* Bottom text (starts below) */}
        <motion.div
          variants={bottomText}
          className="absolute left-0 top-full cursor-pointer"
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TextAnimation;
