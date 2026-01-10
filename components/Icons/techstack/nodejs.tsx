import { cn } from "@/utils/cn";
import React from "react";

const NodeJS = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"
        fill="#68A063"
      />
      <path
        d="M12 3V21M4 7.5L12 12M20 7.5L12 12"
        stroke="#3C873A"
        strokeWidth="1"
      />
    </svg>
  );
};

export default NodeJS;
