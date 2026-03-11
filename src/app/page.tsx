import { Metadata } from "next";
import { images } from "@/config/images";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import TestimonialParallax from "@/components/sections/TestimonialParallax";

export const metadata: Metadata = {
  title: "Home | Birch & Bloom Interior Design",
  description: "Explore our award-winning interior design services and portfolio.",
  openGraph: {
    title: "Home | Birch & Bloom Interior Design",
    description: "Explore our award-winning interior design services and portfolio.",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <main>
      <Hero variant="cinematic" />
      <SectionWrapper>
        <h2 className="text-center text-3xl font-bold mb-8">Curating Sanctuaries</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          At Birch & Bloom, we believe that every space should tell a story. Our designs are tailored to reflect your unique style and needs.
        </p>
      </SectionWrapper>
      <FeaturedProjects />
      <ProcessTeaser />
      <TestimonialParallax />
    </main>
  );
}