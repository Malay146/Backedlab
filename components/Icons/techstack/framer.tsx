import { cn } from "@/utils/cn";
import React from "react";

const Framer = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3H21V12H12M3 12H12L3 21V12Z"
        fill="#0055FF"
      />
      <path
        d="M3 12H12V21"
        stroke="#0055FF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Framer;
