import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import React from "react";

const TerminalPreview = () => {
  return (
    <>
      {/* Terminal Preview */}
      <div className="absolute w-full z-0 top-2 -right-2 sm:-right-8 mask-b-from-80% overflow-hidden px-2 sm:px-0">
        <Terminal className="max-w-md sm:max-w-lg mx-auto relative overflow-hidden">
          <TypingAnimation>pnpm dlx shadcn@latest init</TypingAnimation>

          <AnimatedSpan className="text-zinc-500 relative overflow-hidden">
            › Running initialization and configuration checks...
          </AnimatedSpan>

          <AnimatedSpan className="text-blue-600 relative overflow-hidden">
            ✔ Framework verified and compatible
          </AnimatedSpan>

          <AnimatedSpan className="text-blue-600 relative overflow-hidden">
            ✔ Tailwind CSS configuration validated and optimized
          </AnimatedSpan>

          <AnimatedSpan className="text-indigo-600 relative overflow-hidden">
            ✔ Dependencies installed successfully
          </AnimatedSpan>

          <TypingAnimation className="text-emerald-700 font-medium relative overflow-hidden">
            Success! Project initialization completed.
          </TypingAnimation>
        </Terminal>
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 hidden sm:block">
          Initialize
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-zinc-900">
          Instant project setup
        </h2>
        <p className="mt-2 text-zinc-600 max-w-xs sm:max-w-md">
          Initialize your stack with one command — Tailwind, aliases, configs,
          and dependencies handled for you.
        </p>
      </div>
    </>
  );
};

export default TerminalPreview;
