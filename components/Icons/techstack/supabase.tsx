import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";

const Supabase = ({ className }: { className?: string }) => {
  return (
    <div className={cn("inline-block size-5 relative", className)}>
      <Image src="/supabase.svg" alt="Supabase Logo" layout="fill" objectFit="cover" className="p-px" />
    </div>
  );
};

export default Supabase;
