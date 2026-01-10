import { cn } from "@/utils/cn";
import React from "react";

const Midjourney = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#000000"/>
      <path
        d="M4 6L8 12L4 18M10 6L14 12L10 18M16 6L20 12L16 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Midjourney;
