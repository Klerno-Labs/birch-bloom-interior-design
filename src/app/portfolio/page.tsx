import { Metadata } from "next";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Portfolio | Birch & Bloom Interior Design",
  description: "Explore our portfolio of stunning interior design projects.",
  openGraph: {
    title: "Portfolio | Birch & Bloom Interior Design",
    description: "Explore our portfolio of stunning interior design projects.",
    images: [images.hero.src],
  },
};

export default function Portfolio() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mb-8">Selected Projects</h1>
      <FilterBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project Cards */}
        <ProjectCard title="Modern Living Room" category="Residential" imageSrc={images.gallery-1.src} aspectRatio="landscape" />
        <ProjectCard title="Cozy Bedroom" category="Residential" imageSrc={images.gallery-2.src} aspectRatio="portrait" />
        <ProjectCard title="Stylish Office" category="Commercial" imageSrc={images.gallery-3.src} aspectRatio="landscape" />
      </div>
    </main>
  );
}