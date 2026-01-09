"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We handle product design, UI/UX, branding, frontend and backend development, and launch support.",
  },
  {
    q: "Do you work with startups or established companies?",
    a: "Both. We work with early-stage startups, growing teams, and established products.",
  },
  {
    q: "What does your process look like?",
    a: "Discovery, design, development, and iteration — with clear milestones and feedback loops.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take between 4–12 weeks, depending on scope and complexity.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. Everything is handled in-house for speed, consistency, and scalability.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We continue working with teams post-launch to improve and scale products.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-12">
      <div className="max-w-[760px] mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="font-geist-mono text-xs uppercase tracking-widest text-zinc-400 mb-3">
            FAQ
          </p>
          <h2 className="font-geist text-4xl font-medium text-zinc-900">
            You ask. We answers.
          </h2>
        </div>

        {/* List */}
        <motion.div layout className="border border-zinc-200 select-none">
          {faqs.map((item, i) => {
            const open = active === i;

            return (
              <motion.div
                key={i}
                layout
                className="border-b border-zinc-200 p-8 cursor-pointer overflow-hidden"
                onClick={() => setActive(open ? null : i)}
                transition={{
                  layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                {/* Question */}
                <motion.div 
                  layout="position"
                  className="flex items-start justify-between gap-8"
                >
                  <motion.p 
                    layout="position"
                    className="font-geist text-lg text-zinc-900"
                  >
                    {item.q}
                  </motion.p>

                  <motion.span
                    layout="position"
                    animate={{ opacity: open ? 1 : 0.4 }}
                    transition={{ 
                      opacity: { duration: 0.2 },
                      layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                    }}
                    className="font-geist-mono text-xs text-zinc-500"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                </motion.div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <p className="font-geist text-zinc-600 leading-relaxed max-w-160">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
