"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What kind of services does your studio actually provide?",
    a: "We cover the entire product lifecycle — from product strategy and UI/UX design to branding, frontend and backend development. We also help with launch, performance optimization, and long-term product evolution.",
  },
  {
    q: "Do you usually work with early-stage startups or established companies?",
    a: "Both. We regularly partner with early-stage startups to shape ideas from scratch, as well as established teams looking to redesign, scale, or improve existing products.",
  },
  {
    q: "How does your overall process work from idea to launch?",
    a: "Our process is structured but flexible. We start with discovery and alignment, move into design and prototyping, then development and iteration. You’ll have clear milestones, regular updates, and feedback loops throughout.",
  },
  {
    q: "How long does a typical design and development project take?",
    a: "Most projects take between 4 to 12 weeks. The exact timeline depends on scope, complexity, and how quickly feedback and approvals move during the project.",
  },
  {
    q: "Do you handle both product design and development in-house?",
    a: "Yes. Design and development are handled together in-house. This helps us move faster, maintain consistency, and ensure that what’s designed is built exactly as intended.",
  },
  {
    q: "Do you continue supporting products after they are launched?",
    a: "Absolutely. Post-launch support includes improvements, feature additions, performance tweaks, and scaling support. Many teams continue working with us long after the initial launch.",
  },
  {
  q: "How involved do clients usually need to be during the project?",
  a: "We keep collaboration lightweight and focused. You’ll be involved during key decisions and reviews, but we handle the day-to-day execution so you can stay focused on your business.",
},
{
  q: "How do you usually price your design and development projects?",
  a: "Projects are priced based on scope, complexity, and timeline. We typically work with clear, upfront pricing rather than hourly billing to keep things predictable and transparent.",
},
{
  q: "Can you collaborate remotely with teams in different locations?",
  a: "Yes. We work remotely with teams across different time zones using async communication, regular check-ins, and shared tools to keep everything aligned and moving smoothly.",
},

];



const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full px-6">
      <div className="max-w-6xl mx-auto py-20">

        {/* Header */}
        <div className="mb-10">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl tracking-tight font-medium text-zinc-900">
            You ask. We answer.
          </h2>
        </div>

        {/* List */}
        <motion.div layout className="border border-zinc-200 select-none bg-white">
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
                    className="font-inter text-base sm:text-lg md:text-xl text-zinc-900"
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
                    className="font-mono text-sm text-zinc-500"
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
                      <p className="font-inter text-zinc-600 leading-relaxed max-w-4xl text-sm sm:text-base md:text-lg">
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
