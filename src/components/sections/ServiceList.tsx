"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Full Home Design",
    description: "Complete design from concept to installation. We handle everything from architectural modifications to the final throw pillow.",
    image: images["service-1"]
  },
  {
    id: 2,
    title: "Room Refresh",
    description: "Transform a single room with new furniture, lighting, and decor layout. Perfect for updating a space without a full renovation.",
    image: images["service-2"]
  },
  {
    id: 3,
    title: "Design Consultation",
    description: "An intensive 2-hour in-home walkthrough providing professional design direction, paint suggestions, and furniture arrangement advice.",
    image: images["service-3"]
  },
  {
    id: 4,
    title: "Virtual Design",
    description: "Moodboard, floor plan, and comprehensive shopping list delivered digitally. Great for clients outside the Nashville area.",
    image: images["gallery-3"]
  },
  {
    id: 5,
    title: "Staging for Sale",
    description: "Maximize your home's value before listing by styling key areas to appeal to the broadest range of buyers.",
    image: images["gallery-1"]
  },
  {
    id: 6,
    title: "Holiday Styling",
    description: "Seasonal decor transformation. We unpack, style, and repack your holiday collections for a stunning festive display.",
    image: images["gallery-2"]
  },
];

const ServiceList = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* List Column */}
          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                className={cn(
                  &quot;border-b border-accent/50 py-8 cursor-pointer group transition-colors duration-300",
                  hoveredId === service.id ? "bg-accent/10 -mx-4 px-4" : ""
                )}
              >
                <h3 className={cn(
                  "font-serif text-3xl md:text-4xl mb-2 transition-colors",
                  hoveredId === service.id ? "text-secondary" : "text-primary"
                )}>
                  {service.title}
                </h3>
                <p className={cn(
                  "text-muted-foreground max-w-md transition-all duration-300 overflow-hidden",
                  hoveredId === service.id ? "max-h-24 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"
                )}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Column */}
          <div className="relative lg:sticky lg:top-32 h-[500px] hidden lg:block rounded-lg overflow-hidden shadow-xl">
            {services.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  hoveredId === service.id ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={service.image.src}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={service.id === 1}
                />
              </div>
            ))}
            {hoveredId === null && (
              <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                <p className="font-italic text-2xl text-primary">Hover to explore</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;