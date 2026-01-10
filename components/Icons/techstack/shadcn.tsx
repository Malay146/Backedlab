import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";

const Shadcn = ({ className }: { className?: string }) => {
  return (
    <div className="size-5 relative bg-black rounded-2xl">
      <Image src="/shadcn.svg" alt="Shadcn Logo" layout="fill" objectFit="cover" className="p-px" />
    </div>
  );
};

export default Shadcn;
