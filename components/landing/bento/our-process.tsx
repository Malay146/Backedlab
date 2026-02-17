import { cn } from "@/lib/utils";
import { p } from "motion/react-client";
import React from "react";

const OurProcess = () => {
  return (
    <div className="w-76 h-80 bg-gray-100 rounded-lg absolute left-1/2 -translate-x-1/2 -top-35 flex flex-col gap-2 p-2">
      <div className="nav flex gap-2">
        <div className="w-9 h-6 bg-gray-300 rounded-md"></div>
        <div className="w-full h-full bg-gray-300 rounded-md"></div>
      </div>
      <div className="w-full flex flex-col gap-1 items-center justify-center">
        <div className="w-12 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-40 h-16 bg-gray-300 rounded-md"></div>
        <div className="w-16 h-4 bg-gray-500 rounded-md"></div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-28 h-6 bg-gray-300 rounded-md"></div>
        <div className="w-full h-40 bg-gray-300 rounded-md"></div>
      </div>
      <div className="absolute top-15 flex flex-col items-end">
        <Arrow className=" text-orange-500 rotate-45" />
        <NamePlaceholder name="William" className="bg-orange-500" />
      </div>
      <div className="absolute top-45 flex flex-col items-center left-1/2 -translate-x-1/2">
        <Arrow className=" text-green-600" />
        <NamePlaceholder name="Marcus" className="bg-green-600" />
      </div>
      <div className="absolute top-30 flex flex-col items-start right-0">
        <Arrow className=" text-blue-600 -rotate-45" />
        <NamePlaceholder name="John" />
      </div>
    </div>
  );
};

export default OurProcess;

const Arrow = ({ className }: { className?: string }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
    >
      <g clipPath="url(#clip0_48_97)">
        <path
          d="M16.0926 5.17561L9.26263 17.5266C8.80159 18.2493 8.84119 19.2492 9.39627 19.9824L9.50517 20.1139C9.76436 20.4062 10.0967 20.6242 10.468 20.7455C10.8393 20.8668 11.2363 20.887 11.618 20.8041L11.705 20.7807L14.16 20.3056L14.16 26.0331C14.16 26.3047 14.2134 26.5736 14.3173 26.8245C14.4212 27.0753 14.5735 27.3033 14.7655 27.4953C14.9575 27.6873 15.1854 27.8396 15.4363 27.9435C15.6872 28.0474 15.9561 28.1008 16.2276 28.1007H17.7083C18.257 28.1007 18.7824 27.8836 19.1699 27.4961L19.2929 27.3618C19.6047 26.9895 19.7754 26.5194 19.7752 26.0338L19.7759 20.3098L22.2614 20.7984C23.047 21.0396 23.9994 20.7291 24.5538 19.9952C24.8244 19.6374 24.9791 19.2055 24.9973 18.7574C25.0155 18.3092 24.8963 17.8662 24.6556 17.4878L17.8434 5.1742C17.7567 5.01784 17.6297 4.88758 17.4756 4.79697C17.3215 4.70636 17.1459 4.65872 16.9671 4.65901C16.7884 4.6593 16.6129 4.70751 16.4591 4.79861C16.3053 4.88972 16.1787 5.02039 16.0926 5.17702V5.17561Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_97">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 16.9706) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const NamePlaceholder = ({
  className,
  name,
}: {
  className?: string;
  name?: string;
}) => {
  return (
    <p className={cn("px-2 py-1 text-white bg-blue-600 rounded-md", className)}>
      {name}
    </p>
  );
};
