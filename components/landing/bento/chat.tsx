"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const chatPreview = [
  {
    sender: "client",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80",
    alt: "Client avatar",
    message: "did you build the navbar feature?",
    align: "left",
  },
  {
    sender: "you",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80",
    alt: "Your avatar",
    message: "yes i did, raised a PR for the same",
    align: "right",
  },
  {
    sender: "client",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80",
    alt: "Client avatar",
    message: "can you point me to that PR?",
    align: "left",
  },
  {
    sender: "you",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80",
    alt: "Your avatar",
    message: "sure thing, here's the link.",
    align: "right",
  },
  {
    sender: "client",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80",
    alt: "Client avatar",
    message: "awesome, thanks!",
    align: "left",
  },
];


const Chat = () => {
  return (
    <>
      <div className="relative h-55 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 mask-b-from-70% overflow-hidden">
        <ChatPreview chats={chatPreview} />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 hidden sm:block">
          Client feedback
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-zinc-900">
          Revisions without friction
        </h2>
        <p className="mt-2 text-zinc-600 max-w-xs sm:max-w-md">
          Centralized feedback and clear revision cycles so nothing slips
          through.
        </p>
      </div>
    </>
  );
};

export default Chat;

function ChatPreview({ chats }: { chats: typeof chatPreview }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-50px" }); // allow multiple triggers
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Typing animation for text

  const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayed, setDisplayed] = React.useState("");
    React.useEffect(() => {
      if (!inView) return;
      let timeout: NodeJS.Timeout;
      let i = 0;
      function type() {
        setDisplayed(text.slice(0, i));
        if (i <= text.length) {
          timeout = setTimeout(type, 28); // slower typing
          i++;
        }
      }
      const start = setTimeout(type, delay);
      return () => {
        clearTimeout(timeout);
        clearTimeout(start);
      };
    }, [text, inView, delay]);
    return <span>{displayed}</span>;
  };


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.36, // slower stagger
        ease: "easeInOut" as const,
      },
    },
  };
  const bubbleVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // longer duration
        ease: [0.22, 1, 0.36, 1] as const, // smooth cubic-bezier
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 max-w-xs sm:max-w-md mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {chats.map((chat, i) => (
        <motion.div
          key={i}
          variants={bubbleVariants}
          className={
            chat.align === "right"
              ? "flex items-start gap-2 self-end flex-row-reverse"
              : "flex items-start gap-2"
          }
        >
          <div className="size-7 sm:size-8 rounded-full overflow-hidden shrink-0">
            <Image
              src={chat.avatar}
              alt={chat.alt}
              width={28}
              height={28}
              className="object-cover sm:w-8 sm:h-8 w-7 h-7"
            />
          </div>
          <div
            className={
              chat.align === "right"
                ? "rounded-md bg-blue-600 px-2 sm:px-3 py-1 text-sm sm:text-md text-white"
                : "rounded-md bg-zinc-200 px-2 sm:px-3 py-1 text-sm sm:text-md text-zinc-800"
            }
          >
            <TypingText text={chat.message} delay={i * 400} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
