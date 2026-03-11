"use client";
import { useState } from 'react';

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Refresh'];

  return (
    <div className="flex justify-center mb-8">
      {filters.map(filter => (
        <button
          key={filter}
          className={`px-4 py-2 mx-2 rounded ${activeFilter === filter ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}