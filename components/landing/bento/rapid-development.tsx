import Rocket from "@/components/Icons/rocket";
import Image from "next/image";
import React from "react";

const RapidDevelopment = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="size-12 bg-zinc-50 rounded-full flex items-center justify-center">
        <Image
          src="/bento/claude.png"
          alt="Rocket"
          width={56}
          height={56}
          className="size-6"
        />
      </div>
      <div className="size-16 bg-zinc-50 rounded-full flex items-center justify-center">
        <Image
          src="/bento/antigravity.png"
          alt="Rocket"
          width={56}
          height={56}
          className="size-8"
        />
      </div>
      <div className="size-20 rounded-full bg-linear-to-b from-white to-zinc-300 flex items-center justify-center shadow-lg">
        <Rocket className="size-14" />
      </div>
      <div className="size-16 bg-zinc-50 rounded-full flex items-center justify-center">
            <Image src="/bento/gemini.png" alt="Rocket" width={56} height={56} className="size-8" />
        </div>
        <div className="size-12 bg-zinc-50 rounded-full flex items-center justify-center">
            <Image src="/bento/vercel.png" alt="Rocket" width={56} height={56} className="size-6" />
        </div>
    </div>
  );
};

export default RapidDevelopment;
