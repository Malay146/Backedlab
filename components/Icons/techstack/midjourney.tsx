import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";

const Midjourney = ({ className }: { className?: string }) => {
  return (
    <div className="size-5 relative">
      <Image src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/midjourney.webp" alt="Midjourney Logo" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Midjourney;
