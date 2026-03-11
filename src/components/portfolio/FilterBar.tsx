"use client";
import { useState } from "react";

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Refresh"];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-lg ${activeFilter === filter ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}