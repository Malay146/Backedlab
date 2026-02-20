import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Security = () => {
  return (
    <div className="size-70 flex items-center justify-center">
      <div className="inline-flex items-center justify-center p-0.75 rounded-full bg-linear-to-tl from-[#2261FF] to-[#D4FCFF] relative z-20">
        <div className="flex items-center justify-center size-55 rounded-full bg-linear-to-t from-zinc-200 to-zinc-50 relative z-20">
          <Image
            src="/bento/2/fingerprint.png"
            alt="Security Icon"
            width={180}
            height={180}
            className="object-cover"
          />
        </div>

        <div className="text-[#005274] text-2xl gap-1 font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full tracking-wider opacity-80">
          <MarqueeRow
            duration={7}
            direction="left"
            text="ed9f3a7c2b8e41fafa7c2e9d4f1b8a63e9f2a7c8e1d4b6a3fc4e9a1f7b2d83a6e7"
          />

          <MarqueeRow
            duration={7}
            direction="right"
            text="fa83d1c9e7b24a6f91e2c7a8d3f6e5a1c9e7b2d4f8a63e9c1b7a2d4e6f83a9b2e7"
          />

          <MarqueeRow
            duration={7}
            direction="left"
            text="c1d4f6a83e9c7b1a2d4f6e8c3a9f2e7d4b1a6c83f9e2d7bfc4e9a1f7b2d83a6e7"
          />

          <MarqueeRow
            duration={7}
            direction="right"
            text="f3a7c2b8e41fafa7c2e9d4f1b8a63e9f2a7c8e1d41d4b6a3fc4e9a1f7b2d83a6e7"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;

const MarqueeRow = ({
  text,
  duration,
  direction = "left", // "left" | "right"
}: {
  text: string;
  duration?: number;
  direction?: "left" | "right";
}) => {
  const isLeft = direction === "left";

  return (
    <div className="w-full">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{
          x: isLeft ? ["-35%", "-100%"] : ["-100%", "-35%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* duplicate content for seamless loop */}
        <span className="mr-50">{text}</span>
        <span className="mr-50">{text}</span>
      </motion.div>
    </div>
  );
};
