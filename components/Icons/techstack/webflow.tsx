import { cn } from "@/utils/cn";
import React from "react";

const Webflow = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12C3 12 6 6 9 9C12 12 12 9 15 12C18 15 21 12 21 12"
        stroke="#4353FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default Webflow;
