import { cn } from "@/utils/cn";
import React from "react";

const Swift = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#F05138"/>
      <path
        d="M7 17C7 17 9 15 11 13C13 11 15 9 17 7M17 7C15 9 13 11 11 13C9 15 7 17 7 17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Swift;
