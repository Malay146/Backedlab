import React from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Clear thinking, strong design systems, and execution that feels intentional throughout.",
    name: "Sarah Chen",
    role: "Founder",
    company: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Communication was sharp, timelines were respected, and the final product shipped clean.",
    name: "Michael Torres",
    role: "Product Lead",
    company: "Fintech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Rare mix of design sensitivity and technical depth. Everything felt thought through.",
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Fast iterations, no fluff, and a strong focus on long-term maintainability.",
    name: "James Park",
    role: "CTO",
    company: "Tech Startup",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    quote:
      "Delivered a production-ready MVP in record time without sacrificing quality or attention to detail.",
    name: "Lisa Anderson",
    role: "CEO",
    company: "Healthcare Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    quote:
      "The team understood our vision immediately and translated it into a polished, scalable product.",
    name: "David Kim",
    role: "Head of Product",
    company: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const Testimonial = () => {

  return (
    <section className="w-full border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          {/* <p className="text-sm font-mono font-medium text-zinc-500 mb-3">
            /05 TESTIMONIALS
          </p> */}
          <h2 className="font-inter text-5xl font-medium tracking-tight text-zinc-900">
            Client feedback
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-200">
          {TESTIMONIALS.map((testimonial, index) => {
            const isLastInRow = {
              mobile: index === TESTIMONIALS.length - 1,
              tablet: (index + 1) % 2 === 0,
              desktop: (index + 1) % 3 === 0,
            };

            return (
              <div
                key={index}
                className={`p-8 border-b border-zinc-200 ${
                  !isLastInRow.mobile ? "border-r" : ""
                } md:${!isLastInRow.tablet ? "border-r" : "border-r-0"} lg:${
                  !isLastInRow.desktop ? "border-r" : "border-r-0"
                }`}
              >
                <div className="flex flex-col h-full min-h-50">
                  {/* Quote */}
                  <blockquote className="text-base text-zinc-700 leading-relaxed mb-8 grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    {/* Profile Image */}
                    <div className="relative size-12 border border-zinc-200 overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    
                    {/* Name and Role */}
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-zinc-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-mono text-zinc-500">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
