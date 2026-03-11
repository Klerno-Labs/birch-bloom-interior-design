import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { FilterBar } from "@/components/portfolio/FilterBar";
import { images } from "@/config/images";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "Portfolio | Birch & Bloom Interior Design",
  description: "Explore our portfolio of stunning residential transformations.",
  openGraph: {
    title: "Portfolio | Birch & Bloom Interior Design",
    description: "Explore our portfolio of stunning residential transformations.",
    images: [images.hero.src],
  },
};

export default function PortfolioPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
      <FilterBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard title="Modern Living Room" category="Residential" imageSrc={images["gallery-1"].src} aspectRatio="landscape" />
        <ProjectCard title="Cozy Bedroom" category="Residential" imageSrc={images["gallery-2"].src} aspectRatio="portrait" />
        <ProjectCard title="Stylish Kitchen" category="Residential" imageSrc={images["gallery-3"].src} aspectRatio="landscape" />
      </div>
    </SectionWrapper>
  );
}