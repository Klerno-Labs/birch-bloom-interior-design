"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "Refresh"];

const FilterBar = () => {
  const [activeCategory, setActiveCategory] = useState(&quot;All");

  return (
    <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-accent/50 py-4 mb-12">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] flex flex-wrap gap-4 md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              &quot;px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300",
              activeCategory === cat
                ? "bg-primary text-background shadow-md"
                : "bg-transparent text-primary hover:bg-accent/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;