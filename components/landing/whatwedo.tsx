import React from "react";

const WhatWeDo = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 gap-12 bg-zinc-100 mt-10 border-y border-zinc-300">
      {/* Section Title */}
      <div className="w-full max-w-6xl">
        <h1 className="font-sans text-5xl font-medium tracking-tight text-left">
          What we actually do
        </h1>
        {/* <p className="font-sans text-zinc-600 max-w-2xl text-balance">
          We design and build digital products with clarity, performance,
          and long-term scalability in mind.
        </p> */}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-300 bg-[#fafafa] max-w-6xl items-center">
        {/* Card 01 */}
        <div className="p-8 min-h-90 flex flex-col justify-between">
          <div className="space-y-5">
            <p className="font-mono text-sm text-zinc-500">01</p>
            <h3 className="font-sans text-2xl font-semibold">Design</h3>
            <p className="font-sans text-zinc-600 leading-relaxed">
              Thoughtful interfaces and design systems that prioritize
              clarity, usability, and consistency.
            </p>
            <ul className="font-sans text-sm text-zinc-600 space-y-1">
              <li>• Interface design</li>
              <li>• Design systems</li>
              <li>• UX structure</li>
            </ul>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            UI · UX · Systems
          </p>
        </div>

        {/* Card 02 */}
        <div className="p-8 min-h-90 flex flex-col justify-between border-x border-zinc-300">
          <div className="space-y-5">
            <p className="font-mono text-sm text-zinc-500">02</p>
            <h3 className="font-sans text-2xl font-semibold">Development</h3>
            <p className="font-sans text-zinc-600 leading-relaxed">
              Scalable, high-performance applications built with clean,
              maintainable code.
            </p>
            <ul className="font-sans text-sm text-zinc-600 space-y-1">
              <li>• Frontend architecture</li>
              <li>• Component systems</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            React · Next.js · Web
          </p>
        </div>

        {/* Card 03 */}
        <div className="p-8 min-h-90 flex flex-col justify-between">
          <div className="space-y-5">
            <p className="font-mono text-sm text-zinc-500">03</p>
            <h3 className="font-sans text-2xl font-semibold">Motion</h3>
            <p className="font-sans text-zinc-600 leading-relaxed">
              Purpose-driven motion that improves feedback, flow,
              and spatial understanding.
            </p>
            <ul className="font-sans text-sm text-zinc-600 space-y-1">
              <li>• Layout transitions</li>
              <li>• Micro-interactions</li>
              <li>• Scroll-based motion</li>
            </ul>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            Motion · GSAP · Framer
          </p>
        </div>

        {/* Card 04 */}
        <div className="p-8 min-h-90 flex flex-col justify-between border-t border-zinc-300">
          <div className="space-y-5">
            <p className="font-mono text-sm text-zinc-500">04</p>
            <h3 className="font-sans text-2xl font-semibold">Brand Systems</h3>
            <p className="font-sans text-zinc-600 leading-relaxed">
              Visual identities that scale across products, platforms,
              and teams.
            </p>
            <ul className="font-sans text-sm text-zinc-600 space-y-1">
              <li>• Visual language</li>
              <li>• Typography systems</li>
              <li>• Design guidelines</li>
            </ul>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            Identity · Guidelines
          </p>
        </div>

        {/* Card 05 */}
        <div className="p-8 min-h-90 flex flex-col justify-between border border-zinc-300 border-b-0">
          <div className="space-y-5">
            <p className="font-mono text-sm text-zinc-500">05</p>
            <h3 className="font-sans text-2xl font-semibold">Product Thinking</h3>
            <p className="font-sans text-zinc-600 leading-relaxed">
              Strategic decisions focused on user needs, business goals,
              and long-term value.
            </p>
            <ul className="font-sans text-sm text-zinc-600 space-y-1">
              <li>• Feature prioritization</li>
              <li>• UX strategy</li>
              <li>• MVP planning</li>
            </ul>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            Strategy · UX
          </p>
        </div>

        {/* Card 06 */}
        <div className="p-8 min-h-90 flex flex-col justify-between border-t border-zinc-300">
          <div className="space-y-5">
            <p className="font-mono text-sm text-zinc-500">06</p>
            <h3 className="font-sans text-2xl font-semibold">Polish & QA</h3>
            <p className="font-sans text-zinc-600 leading-relaxed">
              Refinement, testing, and iteration to ensure everything
              feels solid and intentional.
            </p>
            <ul className="font-sans text-sm text-zinc-600 space-y-1">
              <li>• UI consistency</li>
              <li>• Interaction review</li>
              <li>• Cross-device testing</li>
            </ul>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            QA · Refinement
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
