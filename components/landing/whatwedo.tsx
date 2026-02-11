import React from "react";

const WhatWeDo = () => {
  const cards = [
    {
      number: "01",
      title: "Design",
      description:
        "Thoughtful interfaces and design systems that prioritize clarity, usability, and consistency.",
      items: ["Interface design", "Design systems", "UX structure"],
      footer: "UI · UX · Systems",
      className: "",
    },
    {
      number: "02",
      title: "Development",
      description:
        "Scalable, high-performance applications built with clean, maintainable code.",
      items: [
        "Frontend architecture",
        "Component systems",
        "Performance optimization",
      ],
      footer: "React · Next.js · Web",
      className: "border-x border-zinc-300",
    },
    {
      number: "03",
      title: "Motion",
      description:
        "Purpose-driven motion that improves feedback, flow, and spatial understanding.",
      items: [
        "Layout transitions",
        "Micro-interactions",
        "Scroll-based motion",
      ],
      footer: "Motion · GSAP · Framer",
      className: "",
    },
    {
      number: "04",
      title: "Brand Systems",
      description:
        "Visual identities that scale across products, platforms, and teams.",
      items: ["Visual language", "Typography systems", "Design guidelines"],
      footer: "Identity · Guidelines",
      className: "border-t border-zinc-300",
    },
    {
      number: "05",
      title: "Product Thinking",
      description:
        "Strategic decisions focused on user needs, business goals, and long-term value.",
      items: ["Feature prioritization", "UX strategy", "MVP planning"],
      footer: "Strategy · UX",
      className: "border border-zinc-300 border-b-0",
    },
    {
      number: "06",
      title: "Polish & QA",
      description:
        "Refinement, testing, and iteration to ensure everything feels solid and intentional.",
      items: ["UI consistency", "Interaction review", "Cross-device testing"],
      footer: "QA · Refinement",
      className: "border-t border-zinc-300",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center py-20 gap-12 bg-zinc-100 mt-10 border-y border-zinc-300 px-6">
      {/* Section Title */}
      <div className="w-full max-w-6xl">
        <h1 className="text-5xl font-medium tracking-tight text-left font-inter">
          What we actually do
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-300 bg-[#fafafa] max-w-6xl items-center">
        {cards.map((card, idx) => (
          <div
            key={card.number}
            className={`p-8 min-h-90 flex flex-col justify-between ${card.className}`.trim()
              
            }
          >
            <div className="space-y-5">
              <p className="font-mono text-sm text-blue-900">{card.number}</p>
              <h3 className="font-inter text-2xl font-semibold bg-linear-to-t from bg-blue-900 bg-clip-text text-transparent">{card.title}</h3>
              <p className="font-sans text-zinc-600 leading-relaxed">
                {card.description}
              </p>
              <ul className="font-sans text-sm text-zinc-600 space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <p className="font-mono text-sm text-zinc-500">{card.footer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
