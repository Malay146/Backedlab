import React from "react";
import Image from "next/image";

const Bento = () => {
  return (
    <div className="w-full py-20 bg-zinc-100  border-y border-zinc-200">
      <div className="max-w-6xl min-h-200 grid grid-cols-5 mx-auto border border-zinc-300">

        {/* Card 1 — Design */}
        <div className="col-span-3 relative border-r border-b border-zinc-300 bg-zinc-100 overflow-hidden">
          <Image
            src="/bento/scale.png"
            alt="Design systems"
            fill
            className="object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-8 gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Design
            </span>
            <h2 className="font-inter text-3xl font-semibold text-zinc-900">
              Design that scales
            </h2>
            <p className="font-sans text-zinc-600 max-w-md">
              Interfaces, components, and systems built to grow with your product.
            </p>
          </div>
        </div>

        {/* Card 2 — Development */}
        <div className="col-span-2 relative border-b border-zinc-300 bg-zinc-100 overflow-hidden">
          <Image
            src="/bento/development.png"
            alt="Development"
            fill
            className="object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-8 gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Engineering
            </span>
            <h2 className="font-inter text-3xl font-semibold text-zinc-900">
              Built for performance
            </h2>
            <p className="font-sans text-zinc-600">
              Clean, scalable code with modern stacks and best practices.
            </p>
          </div>
        </div>

        {/* Card 3 — Motion */}
        <div className="col-span-2 relative border-r border-zinc-300 bg-zinc-100 overflow-hidden">
          <Image
            src="/bento/motion.png"
            alt="Motion design"
            fill
            className="object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-8 gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Motion
            </span>
            <h2 className="font-inter text-3xl font-semibold text-zinc-900">
              Motion with intent
            </h2>
            <p className="font-sans text-zinc-600">
              Subtle interactions that guide users and feel effortless.
            </p>
          </div>
        </div>

        {/* Card 4 — Launch */}
        <div className="col-span-3 relative bg-zinc-100 overflow-hidden">
          <Image
            src="/bento/launch.png"
            alt="Launch & scale"
            fill
            className="object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-8 gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Launch
            </span>
            <h2 className="font-inter text-3xl font-semibold text-zinc-900">
              From idea to impact
            </h2>
            <p className="font-sans text-zinc-600 max-w-md">
              MVPs, product launches, and long-term scale — end to end.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bento;
