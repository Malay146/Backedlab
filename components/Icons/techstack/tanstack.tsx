import { cn } from "@/utils/cn";
import React from "react";

const TanStack = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L3 7L12 11L21 7L12 3Z"
        fill="#FF4154"
        stroke="#FF4154"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3 12L12 16L21 12"
        stroke="#FF4154"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17L12 21L21 17"
        stroke="#FF4154"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TanStack;
