"use client";
import { images } from '@/config/images';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export default function ProjectCard({ title, category, imageSrc, aspectRatio }: ProjectCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg shadow-lg")}>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-300">{category}</p>
      </div>
    </div>
  );
}