"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue } from "motion/react";
import AnimatedNumber from "./animated-number";

const Stats = () => {

    const stats = [
        {
            value: "24+",
            title: "Projects shipped",
            meta: "Web & product design",
        },
        {
            value: "95+",
            title: "Lighthouse score",
            meta: "Performance & accessibility",
        },
        {
            value: "5+",
            title: "Years of experience",
            meta: "Design & development",
        },
        {
            value: "80%",
            title: "Client retention",
            meta: "Long-term collaborations",
        },
    ];  

  return (
    <div className="w-full flex flex-col items-center justify-center py-24 border-b border-zinc-300 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-inter text-5xl tracking-tight font-medium max-w-6xl w-full text-left"
      >
        By the numbers
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-6xl w-full border border-zinc-300 flex flex-col md:flex-row mt-8 bg-white"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: "easeOut",
            }}
            className={`flex-1 p-8 flex flex-col gap-4 ${
              i !== 3 ? "border-r border-zinc-300" : ""
            }`}
          >
            <AnimatedNumber value={stat.value} className="text-blue-800" />
            <p className="font-inter text-lg font-medium">{stat.title}</p>
            <p className="font-sans text-sm text-zinc-500">{stat.meta}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;