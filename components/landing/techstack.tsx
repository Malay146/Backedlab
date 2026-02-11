import React from "react";
import Figma from "../Icons/techstack/figma";
import Play from "../Icons/techstack/play";
import Rive from "../Icons/techstack/rive";
import Lottie from "../Icons/techstack/lottie";
import ChatGPT from "../Icons/techstack/chatgpt";
import Claude from "../Icons/techstack/claude";
import Midjourney from "../Icons/techstack/midjourney";
import NextJS from "../Icons/techstack/nextjs";
import TanStack from "../Icons/techstack/tanstack";
import ReactIcon from "../Icons/techstack/react";
import Shadcn from "../Icons/techstack/shadcn";
import Supabase from "../Icons/techstack/supabase";
import NodeJS from "../Icons/techstack/nodejs";
import Swift from "../Icons/techstack/swift";
import ReactNative from "../Icons/techstack/reactnative";
import Framer from "../Icons/techstack/framer";
import Webflow from "../Icons/techstack/webflow";
import Shopify from "../Icons/techstack/shopify";
import Adobe from "../Icons/techstack/adobe";

const Techstack = () => {
  const techStackData = [
    {
      title: "/01 EDITOR AND AI TOOLS",
      items: [
        { icon: <Figma />, name: "Figma" },
        { icon: <Play />, name: "Play" },
        { icon: <Rive />, name: "Rive" },
        { icon: <Lottie />, name: "Lottielab" },
        { icon: <ChatGPT />, name: "ChatGPT", note: "(thinking partner)" },
        { icon: <Claude />, name: "Claude", note: "(thinking partner)" },
        { icon: <Midjourney />, name: "Midjourney", note: "(art direction)" },
        { icon: <Adobe />, name: "Adobe", note: "(art direction)" },
      ],
    },
    {
      title: "/02 PRODUCT DEVELOPMENT",
      items: [
        { icon: <NextJS />, name: "Next.js" },
        { icon: <TanStack />, name: "TanStack" },
        { icon: <ReactIcon />, name: "React" },
        { icon: <Shadcn />, name: "shadcn/ui" },
        { icon: <Supabase />, name: "Supabase" },
        { icon: <NodeJS />, name: "Node.js" },
        { icon: <Swift />, name: "SwiftUI" },
        { icon: <ReactNative />, name: "React Native" },
      ],
    },
    {
      title: "/03 WEBSITE DEVELOPMENT",
      items: [
        { icon: <Framer />, name: "Framer" },
        { icon: <Webflow />, name: "Webflow" },
        { icon: <Shopify />, name: "Shopify" },
        { icon: <ReactIcon />, name: "React" },
        { icon: <Shadcn />, name: "shadcn/ui" },
        { icon: <Supabase />, name: "Supabase" },
        { icon: <NodeJS />, name: "Node.js" },
        { icon: <NextJS />, name: "Next.js" },
      ],
    },
  ];

  return (
    <div className="w-full px-6">
      <section className="w-full">
        <div className="max-w-6xl mx-auto py-20">
          {/* Section header */}
          <h2 className="font-inter font-medium text-5xl tracking-tight mb-12">
            Our techstack
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-200 bg-white">
            {techStackData.map((column, index) => (
              <div
                key={index}
                className={`p-6 ${
                  index < techStackData.length - 1 ? "border-r border-zinc-200" : ""
                }`}
              >
                <h3 className="text-sm font-mono font-semibold text-blue-900 mb-6">
                  {column.title}
                </h3>

                <ul className="space-y-4 text-sm text-zinc-700">
                  {column.items.map((item, idx) => (
                    <li key={idx} className="font-sans flex items-center gap-3">
                      {item.icon}
                      <span>
                        {item.name}{" "}
                        {item.note && (
                          <span className="text-zinc-500">{item.note}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techstack;
