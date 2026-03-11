"use client";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  aspectRatio: "landscape" | "portrait";
}

export function ProjectCard({ title, category, imageSrc, aspectRatio }: ProjectCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl shadow-md group", aspectRatio === "landscape" ? "h-60" : "h-80")}>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-white">{category}</p>
      </div>
    </div>
  );
}