import { cn } from "@/utils/cn";
import React from "react";

const Supabase = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 21H5C4.5 21 4 20.5 4.5 19.5L11 7.5C11.5 6.5 13 7 13 8V15H19C19.5 15 20 15.5 19.5 16.5L13 28.5C12.5 29.5 11 29 11 28V21H13.5Z"
        fill="#3ECF8E"
        transform="scale(0.7) translate(3, -3)"
      />
    </svg>
  );
};

export default Supabase;
