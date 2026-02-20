import React from "react";
import Image from "next/image";
import AIDriven from "./bento/ai-driven";
import Security from "./bento/security";
import Analytics from "./bento/analytics";

const Bento2 = () => {
    const bentoData = [
        {
            title: "AI-Driven Advantage",
            description: "Next-gen AI and smart automation for faster, sharper outcomes.",
            component: <AIDriven />
        },
        {
            title: "Enterprise-Grade Security",
            description: "SOC2, Role-Based Access, and encrypted data pipelines.",
            component: <Security />
        },
        {
            title: "Analytics for everything",
            description: "Check analytics, track your posts, and get insights into your audience.",
            component: <Analytics />
        }
    ];
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 border-y border-zinc-200 bg-zinc-100">
      <section className="w-full">
        <div className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20">
          {/* Section header */}
          <h2 className="font-inter font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8 sm:mb-10 md:mb-12">
            Insights for Modern Products
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

            {bentoData.map((item, index) => (
                <div key={index} className="w-full border border-zinc-300 bg-zinc-50 flex flex-col overflow-hidden">
                    <div className="w-full relative flex items-center justify-center mask-l-from-70% mask-r-from-70%">
                        {item.component}
                    </div>
                    <div className="w-full h-full flex flex-col justify-end p-4 font-inter">
                        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">{item.title}</h1>
                        <p className="text-sm sm:text-base text-zinc-500 leading-snug">{item.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bento2;
