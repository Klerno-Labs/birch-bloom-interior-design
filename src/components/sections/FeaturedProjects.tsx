import ProjectCard from "@/components/portfolio/ProjectCard";
import { images } from "@/config/images";

const FeaturedProjects = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard title="Modern Living Room" category="Residential" imageSrc={images.gallery-1.src} aspectRatio="landscape" />
        <ProjectCard title="Cozy Bedroom" category="Residential" imageSrc={images.gallery-2.src} aspectRatio="portrait" />
        <ProjectCard title="Stylish Office" category="Commercial" imageSrc={images.gallery-3.src} aspectRatio="landscape" />
      </div>
    </section>
  );
};

export default FeaturedProjects;