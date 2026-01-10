import { cn } from "@/utils/cn";
import React from "react";
import Marquee from "react-fast-marquee";
import { StripeLogo } from "../Icons/stripe";
import { Arxiv } from "../Icons/arxiv";
import { Behance } from "../Icons/behance";
import Appveyor from "../Icons/appveyor";
import Babel from "../Icons/babel";
import Aral from "../Icons/aral";
import Atom from "../Icons/atom";
import Cisco from "../Icons/cisco";
import Coreui from "../Icons/coreui";
import Cloudfare from "../Icons/cloudfare";
import Bancontact from "../Icons/bancontact";

const MarqueeCompany = () => {
  const logos = [
    StripeLogo,
    Arxiv,
    Behance,
    Appveyor,
    Babel,
    Aral,
    Atom,
    Cisco,
    Coreui,
    Cloudfare,
    Bancontact,
  ];

  return (
    <div className="flex flex-col items-center mt-16 w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <h2 className="font-mono mb-4 md:mb-6 text-sm md:text-md text-zinc-500 tracking-wider font-semibold text-center">
        Trusted by Companies Worldwide
      </h2>

      {/* CLIPPING CONTAINER */}
      <div className="relative w-full overflow-hidden max-w-full mt-2 md:mt-4">
        <Marquee
          gradient={true}
          gradientColor="#FAFAFA"
          speed={50}
          autoFill
          className="flex items-center"
          style={{ overflow: "hidden" }}
        >
          {logos.map((Icon, index) => (
            <div key={index} className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-center">
              <Icon className="size-10 sm:size-12 md:size-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeCompany;
