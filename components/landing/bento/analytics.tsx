"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

const Analytics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  const [pathLength, setPathLength] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0.5); // 0 to 1
  const [pointPosition, setPointPosition] = useState({ x: 0, y: 0 });
  
  // Calculate visitors based on position (0-3000)
  const visitors = Math.round(currentPosition * 3000);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      
      // Set initial point position at 50% of path
      const point = pathRef.current.getPointAtLength(length * 0.5);
      setPointPosition({ x: point.x, y: point.y });
    }
  }, []);

  return (
    <div ref={containerRef} className="size-70 flex items-center justify-center">
      <div ref={svgWrapperRef} className="w-full h-full relative">
        <GraphFill isInView={isInView} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <GraphOutline 
          ref={pathRef}
          isInView={isInView} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        />

        {/* Vertical dashed line */}
        <motion.div 
          className="absolute w-px left-32.5 top-14 bottom-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
          }}
          transition={{ 
            delay: 2,
            duration: 0.5 
          }}
        >
          <svg className="w-full h-full">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="8 3"
            />
          </svg>
        </motion.div>

        {/* Point indicator */}
        <motion.div
          className="absolute size-6 rounded-full border-2 border-blue-500 bg-linear-to-b from-blue-400 to-blue-700 shadow-lg left-29.5 top-28"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0,
          }}
          transition={{ 
            delay: 2,
            duration: 0.5,
          }}
        />

        {/* Visitor count label - follows only in X direction */}
        <motion.div 
          className="absolute px-3 py-1 bg-linear-to-t from-blue-700 to-blue-500 rounded-full shadow-md border border-blue-300 pointer-events-none left-20 top-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 10,
          }}
          transition={{ 
            delay: 2.2,
            duration: 0.5 
          }}
        >
          <span className="text-xs font-medium text-white whitespace-nowrap">
            {visitors.toLocaleString()} Visitors
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;

interface GraphOutlineProps {
  className?: string;
  isInView: boolean;
  ref?: React.RefObject<SVGPathElement | null>;
}

const GraphOutline = ({ className, isInView, ref }: GraphOutlineProps) => {
  return (
    <svg
      width="260"
      height="156"
      viewBox="0 0 260 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-95", className)}
    >
      <motion.path
        ref={ref}
        d="M0.886719 154.985C0.886719 154.985 25.1639 108.526 43.9788 106.237C62.7937 103.947 71.7647 125.908 88.7283 125.071C105.692 124.234 103.809 63.8279 120.771 64.6898C137.733 65.5517 131.688 99.783 151.709 99.5891C171.73 99.3952 167.262 64.9101 183.752 38.0999C200.241 11.2896 258.887 0.984741 258.887 0.984741"
        stroke="url(#paint0_linear_89_51)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_89_51"
          x1="256.124"
          y1="-10.0944"
          x2="0.482023"
          y2="154.356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4798FF" />
          <stop offset="1" stopColor="#2B5B99" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const GraphFill = ({ 
  className, 
  isInView 
}: { 
  className?: string;
  isInView: boolean;
}) => {
  return (
    <svg
      width="258"
      height="154"
      viewBox="0 0 258 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-95", className)}
    >
      <motion.path
        d="M43.0921 105.252C24.2772 107.541 0 154 0 154H258V0C258 0 199.355 10.3049 182.865 37.1151C166.376 63.9253 170.843 98.4104 150.822 98.6043C130.801 98.7982 136.847 64.5669 119.884 63.705C102.922 62.8431 104.805 123.249 87.8415 124.086C70.878 124.924 61.907 102.963 43.0921 105.252Z"
        fill="url(#paint0_linear_89_52)"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ 
          duration: 1,
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_89_52"
          x1="129.276"
          y1="59.2734"
          x2="127.054"
          y2="154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B7E9FF" />
          <stop
            offset="0.456731"
            stopColor="#CDEFFF"
            stopOpacity="0.543269"
          />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
