import { useState } from 'react';
import { cn } from '@/lib/utils';

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Refresh'];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {filters.map(filter => (
        <button
          key={filter}
          className={cn('px-4 py-2 rounded-md', {
            'bg-gray-900 text-white': activeFilter === filter,
            'bg-gray-200 text-gray-900': activeFilter !== filter,
          })}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}