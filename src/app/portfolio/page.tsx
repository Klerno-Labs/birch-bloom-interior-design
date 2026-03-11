import FilterBar from "@/components/portfolio/FilterBar";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { images } from "@/config/images";

const allProjects = [
  {
    title: "The Vanderbilt Residence",
    category: "Residential",
    image: images["gallery-1"],
    size: "lg:col-span-2",
  },
  {
    title: "12 South Loft",
    category: "Residential",
    image: images["gallery-2"],
    size: "",
  },
  {
    title: "The Gulch Commercial Space",
    category: "Commercial",
    image: images["gallery-3"],
    size: "lg:row-span-2",
  },
  {
    title: "Green Hills Master Suite",
    category: "Refresh",
    image: images["service-1"],
    size: "",
  },
  {
    title: "West End Townhome",
    category: "Residential",
    image: images["service-2"],
    size: "lg:col-span-2",
  },
  {
    title: "Belcourt Studio",
    category: "Commercial",
    image: images["service-3"],
    size: "",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] mb-12">
        <h1 className="font-serif text-5xl md:text-7xl text-primary mb-6">
          Selected Works
        </h1>
        <p className="font-italic text-secondary text-xl max-w-2xl">
          A curated collection of residential and commercial projects.
        </p>
      </div>
      
      <FilterBar />

      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6">
          {allProjects.map((project, idx) => (
            <div key={idx} className={project.size}>
              <ProjectCard
                title={project.title}
                category={project.category}
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}