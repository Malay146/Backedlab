import { cn } from "@/utils/cn";
import React from "react";

const Claude = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#CC9B7A"/>
      <path
        d="M7.5 16.5L9 13.5L10.5 16.5M9 13.5L10.5 10.5L12 13.5M10.5 10.5L12 7.5L13.5 10.5M12 13.5L13.5 16.5L15 13.5M13.5 10.5L15 13.5M15 7.5L16.5 10.5L15 13.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Claude;
