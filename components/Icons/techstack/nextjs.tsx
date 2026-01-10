import { cn } from "@/utils/cn";
import React from "react";

const NextJS = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="black"/>
      <path
        d="M9 17.5V7L16 17.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="17" y1="7" x2="17" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default NextJS;
