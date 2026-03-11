import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ProjectCard = ({ title, category, src, alt, width, height, className }: ProjectCardProps) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-lg cursor-pointer", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-accent text-xs uppercase tracking-widest mb-2 block">
            {category}
          </span>
          <h3 className="text-background font-serif text-2xl md:text-3xl flex items-center justify-between">
            {title}
            <ArrowUpRight className="w-6 h-6" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;