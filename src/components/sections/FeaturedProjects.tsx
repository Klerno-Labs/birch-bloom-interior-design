"use client";

import { useRef } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "The Vanderbilt Residence",
    category: "Full Home Renovation",
    image: images["gallery-1"],
    size: "large",
  },
  {
    title: "East Nashville Loft",
    category: "Room Refresh",
    image: images["gallery-2"],
    size: "small",
  },
  {
    title: "Forest Hills Estate",
    category: "New Build",
    image: images["gallery-3"],
    size: "large",
  },
];

const FeaturedProjects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-surface overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] mb-12">
        <div className="flex items-end justify-between border-b border-primary/10 pb-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-2">
              Selected Works
            </h2>
            <p className="font-italic text-secondary text-lg">
              A glimpse into our recent transformations
            </p>
          </div>
          <div className="hidden md:flex gap-2">
             <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary/50 text-sm">
               Scroll
             </span>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto px-[clamp(24px,5vw,80px)] no-scrollbar pb-12 snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "relative group flex-shrink-0 snap-center overflow-hidden rounded-lg cursor-grab active:cursor-grabbing",
              project.size === "large" ? "w-[85vw] md:w-[600px] aspect-[3/4]" : "w-[85vw] md:w-[400px] aspect-square"
            )}
          >
            <Image
              src={project.image.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 600px, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <p className="text-background/80 text-sm uppercase tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="font-serif text-3xl text-background">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;