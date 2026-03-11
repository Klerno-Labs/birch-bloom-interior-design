import { images } from '@/config/images';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import FilterBar from '@/components/portfolio/FilterBar';
import ProjectCard from '@/components/portfolio/ProjectCard';

export const metadata = {
  title: "Portfolio | Birch & Bloom Interior Design",
  description: "Explore our portfolio of stunning residential transformations.",
  openGraph: {
    title: "Portfolio | Birch & Bloom Interior Design",
    description: "Explore our portfolio of stunning residential transformations.",
    image: images.hero.src,
  },
};

export default function PortfolioPage() {
  return (
    <main className={cn("pt-20")}>
      <section className="bg-white py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Selected Projects</h1>
        <FilterBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Modern Living Room"
            category="Residential"
            imageSrc={images.gallery-1.src}
            aspectRatio="landscape"
          />
          <ProjectCard
            title="Cozy Bedroom"
            category="Residential"
            imageSrc={images.gallery-2.src}
            aspectRatio="landscape"
          />
          <ProjectCard
            title="Elegant Kitchen"
            category="Residential"
            imageSrc={images.gallery-3.src}
            aspectRatio="landscape"
          />
        </div>
      </section>
    </main>
  );
}