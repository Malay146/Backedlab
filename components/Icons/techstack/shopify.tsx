import { cn } from "@/utils/cn";
import React from "react";

const Shopify = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4C16 4 15.5 4 15 5C14.5 6 13 8 13 8L11 7.5C11 7.5 11 6 10 5.5C9 5 8 5 8 5L6 19L14 21L18 20L16 4Z"
        fill="#95BF47"
      />
      <path
        d="M13 8L15 9L16 4C16 4 15.5 4 15 5C14.5 6 13 8 13 8Z"
        fill="#5E8E3E"
      />
    </svg>
  );
};

export default Shopify;
