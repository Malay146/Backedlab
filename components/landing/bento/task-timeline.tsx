"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const TaskTimeline = () => {
  const tasks = [
    { title: "Complete DB integration", day: 28 },
    { title: "Review code", day: 31 },
    { title: "Sync up with team", day: 2 },
    { title: "Deploy", day: 1 },
  ];

  // Color palette for pills
  const pillColors = [
    {
      bg: "bg-blue-100",
      border: "border-blue-300",
      text: "text-blue-900",
    },
    {
      bg: "bg-green-100",
      border: "border-green-300",
      text: "text-green-900",
    },
    {
      bg: "bg-yellow-100",
      border: "border-yellow-300",
      text: "text-yellow-900",
    },
    {
      bg: "bg-pink-100",
      border: "border-pink-300",
      text: "text-pink-900",
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-50px" }); // allow multiple triggers
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const pillVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      {/* Timeline */}
      <div ref={ref} className="relative h-80 px-3 sm:px-6 md:px-8 pt-6 sm:pt-10 mask-b-from-0% overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-x-3 sm:inset-x-8 top-10 bottom-0 flex justify-between">
          {[28, 29, 30, 31, 1, 2].map((day) => (
            <div
              key={day}
              className="relative w-px bg-zinc-300 flex justify-center"
            >
              <span className="absolute -top-6 text-xs sm:text-xs text-zinc-500">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Task pills with animation */}
        <motion.div
          className="absolute inset-0"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {tasks.map((task, i) => {
            const color = pillColors[i % pillColors.length];
            return (
              <motion.div
                key={task.title}
                className={`absolute px-2 sm:px-4 py-1 sm:py-1.5 rounded-md shadow-sm mt-4 sm:mt-6 border text-xs sm:text-xs md:text-sm ${color.bg} ${color.border} ${color.text}`}
                style={{
                  left: `calc(${10 + i * 18}% + ${i * 2}px)`,
                  top: `calc(${20 + i * 36}px)`,
                }}
                variants={pillVariants}
              >
                {task.title}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 hidden sm:block">
          Workflow
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-zinc-900">
          Workflow that scales
        </h2>
        <p className="mt-2 text-zinc-600 max-w-xs sm:max-w-md">
          Processes, tools, and systems designed to evolve as your product
          grows.
        </p>
      </div>
    </>
  );
};

export default TaskTimeline;
