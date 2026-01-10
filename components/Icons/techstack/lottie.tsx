import { cn } from "@/utils/cn";
import React from "react";

const Lottie = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 362.435 362.435"
      fill="#7270FF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="350"
        height="350"
        rx="97.5788"
        fill=""
      />

      <path
        d="M129.212 256.022C196 182.5 215.5 104.25 186.5 97.0002C154.5 89 138.874 204.965 164.5 243C189.238 279.717 224.688 264.261 231 234"
        stroke="white"
        strokeWidth="22.673"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lottie;
