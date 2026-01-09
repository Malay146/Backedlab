import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import TextAnimation from "./text-animation";
import { ArrowRight } from "lucide-react";

const FeatureWork = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8 gap-10">
      <h1 className="text-6xl tracking-tight mt-10">Feature Work</h1>
      <div className="relative w-full overflow-hidden max-w-full">
        <Marquee
          gradient={true}
          gradientColor="#FAFAFA"
          speed={30}
          className="flex items-center"
          style={{ overflow: "hidden" }}
          direction="right"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative">
              <div className="w-200 h-120 border border-zinc-300 rounded-2xl relative overflow-hidden mx-4">
                <Image
                  src="/image.png"
                  alt="Feature Work Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex items-center gap-4 absolute bottom-2 left-6 w-[94%] bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-zinc-200">
                <span className="inline-block size-8 rounded-md bg-zinc-600"></span>
                <p className="text-md font-semibold text-zinc-500 tracking-wide">
                  Dashboard for Load Trends
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <TextAnimation className="border border-zinc-700 px-4 py-3 text-black rounded-full cursor-pointer">
        <button className="flex gap-2 items-center font-medium">
          View Work <ArrowRight size={16} />
        </button>
      </TextAnimation>
    </div>
  );
};

export default FeatureWork;
