import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const AIDriven = () => {
  return (
    <div className="size-70 flex flex-col gap-2 justify-center items-center ">
      <div className="flex items-center justify-center gap-2">
        <Circle />
        <Circle imageLinks={["/bento/1/bolt.png", "/bento/1/deepseek.png"]} />
        <Circle imageLinks={["/bento/1/antigravity.png", "/bento/1/midjourney.png"]} />
        <Circle imageLinks={["/bento/1/co-pilot.png", "/bento/1/mistral.png"]} />
        <Circle />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Circle />
        <Circle imageLinks={["/bento/1/cursor.png", "/bento/1/notion.png"]} />
        <Circle imageLinks={["/bento/1/claude.png", "/bento/1/pytorch.png"]} />
        <Circle imageLinks={["/bento/1/chatGPT.png", "/bento/1/stability-ai.png"]} />
        <Circle imageLinks={["/bento/1/gemini.png", "/bento/1/xai.png"]} />
        <Circle />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Circle />
        <Circle imageLinks={["/bento/1/perplexity.png", "/bento/1/qwenlm.png"]} />
        <Circle imageLinks={["/bento/1/github-copilot.png", "/bento/1/nvidia.png"]} />
        <Circle imageLinks={["/bento/1/ollama.png", "/bento/1/hugging-face.png"]} />
        <Circle />
      </div>
    </div>
  );
};

export default AIDriven;

const Circle = ({
  className,
  imageLink,
  imageLinks,
}: {
  className?: string;
  imageLink?: string;
  imageLinks?: string[];
}) => {
  const [blur, setBlur] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = imageLinks || (imageLink ? [imageLink] : []);

  useEffect(() => {
    if (images.length === 0) return;

    const randomDelay = Math.random() * 5000 + 3000; // 2-5 seconds
    const interval = setInterval(() => {
      // Blur in
      setBlur(10);
      setTimeout(() => {
        // Change image
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        // Blur out
        setBlur(0);
      }, 500);
    }, randomDelay);

    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images[currentImageIndex];

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center p-0.5 rounded-full bg-linear-to-t from-[#2261FF] to-[#D4FCFF]",
        className,
      )}
    >
      <div className="flex items-center justify-center size-16 rounded-full bg-white overflow-hidden">
        {currentImage && (
          <motion.div
            animate={{ filter: `blur(${blur}px)` }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={currentImage}
              alt="AI Icon"
              width={40}
              height={40}
              className="object-cover"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};
