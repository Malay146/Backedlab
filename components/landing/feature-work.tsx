import Image from "next/image";
import Marquee from "react-fast-marquee"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const works = [
  { id: 1, title: "Dashboard for Load Trends", image: "/work.png" },
  { id: 2, title: "Analytics Platform", image: "/work.png" },
  { id: 3, title: "E-Commerce UI", image: "/work.png" },
];

const FeatureWork = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8 gap-6 mt-18">

      <div className="relative w-full overflow-hidden max-w-full">
        <Marquee speed={30} direction="right" className="flex items-center">

          {works.map((work, index) => (
            <div key={work.id} className="relative">
              <div className="w-[90vw] max-w-200 h-120 border border-zinc-300 rounded-lg relative overflow-hidden mx-4">

                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                
                />

              </div>

              <div className="flex items-center gap-4 absolute bottom-2 left-6 w-[94%] bg-white/80 backdrop-blur-sm px-2 py-2 rounded-md border border-zinc-200">

                <span className="inline-block size-8 rounded-sm bg-zinc-600"></span>

                <p className="font-sans text-md font-semibold text-zinc-500 tracking-wide">
                  {work.title}
                </p>

              </div>

            </div>
          ))}

        </Marquee>
      </div>

      <Link
        href="/works"
        className="border border-zinc-700 px-4 py-2 text-black rounded-lg cursor-pointer group flex items-center gap-2 font-medium font-sans"
      >
        <span className="chroma-text-out chroma-text-out-animate">
          View Work
        </span>
        <ArrowRight size={16} />
      </Link>

    </div>
  );
};

export default FeatureWork;
