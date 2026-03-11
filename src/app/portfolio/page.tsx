import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

export const metadata = {
  title: "Portfolio | Birch & Bloom Interior Design",
  description: "View our selected interior design projects in Nashville and beyond. From modern renovations to classic refreshes.",
};

export default function Portfolio() {
  const projects = [
    { id: 1, title: "The Highlands Ranch", cat: "Residential", img: "gallery-1", size: "md:col-span-2 md:row-span-2" },
    { id: 2, title: "Belle Meade Kitchen", cat: "Renovation", img: "gallery-2", size: "md:col-span-1 md:row-span-1" },
    { id: 3, title: "East Nashville Bungalow", cat: "Residential", img: "gallery-3", size: "md:col-span-1 md:row-span-2" },
    { id: 4, title: "Green Hills Estate", cat: "Full Service", img: "service-1", size: "md:col-span-1 md:row-span-1" },
    { id: 5, title: "12 South Condo", cat: "Refresh", img: "service-2", size: "md:col-span-1 md:row-span-1" },
    { id: 6, title: "Franklin Estate", cat: "New Build", img: "service-3", size: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <main className="pt-24">
      <div className="global-overlay" />
      
      {/* Minimal Hero */}
      <section className="py-24 px-[clamp(24px,5vw,80px)] text-center">
        <h1 className="font-playfair text-[clamp(3rem,10vw,6rem)] text-[#2c2c2c] mb-6">Selected Works</h1>
        <p className="font-manrope text-[#6b6b6b] max-w-xl mx-auto">
          A collection of residential transformations that showcase our commitment to organic, editorial design.
        </p>
      </section>

      {/* Broken Grid */}
      <section className="px-[clamp(24px,5vw,80px)] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[400px] gap-6">
          {projects.map((project) => (
            <div key={project.id} className={`relative group overflow-hidden rounded-sm ${project.size}`}>
              <Image
                src={images[project.img as keyof typeof images].src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#d4c5b2] text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.cat}</span>
                <h3 className="text-white font-playfair text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-manrope text-[#6b6b6b] mb-6">Interested in a similar project?</p>
          <Link href="/contact">
            <Button variant="secondary">Start Your Project</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}