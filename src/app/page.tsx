import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import TestimonialParallax from "@/components/sections/TestimonialParallax";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionWrapper background="alabaster">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-italic text-secondary text-xl md:text-2xl mb-6">
            Design Philosophy
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-primary leading-tight mb-8">
            We believe that your home should be a reflection of who you are—functional, beautiful, and deeply personal.
          </p>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            At Birch & Bloom, we don't just fill rooms with furniture. We curate experiences. From the initial sketch to the final installation, our award-winning team works tirelessly to ensure that every detail speaks to your unique lifestyle and aesthetic.
          </p>
        </div>
      </SectionWrapper>

      <FeaturedProjects />

      <ProcessTeaser />

      <SectionWrapper background="sand">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-primary mb-6">
                Meet the Designer
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Claire Whitfield, ASID certified principal designer, brings 14 years of experience to every project. Featured in Architectural Digest, she specializes in creating warm, organic spaces that feel both timeless and fresh.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Supported by Senior Designer Megan Park, an expert in modern farmhouse and coastal aesthetics, our team is dedicated to excellence.
              </p>
              <Button label="Read Our Story" href="/about" variant="secondary" />
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
               {/* Placeholder for team image, utilizing config about slot */}
               <img 
                 src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000" 
                 alt="Design Team" 
                 className="object-cover w-full h-full"
               />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <TestimonialParallax />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-background">
        <div className="max-w-4xl mx-auto px-[clamp(24px,5vw,80px)] text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to transform your home?
          </h2>
          <p className="text-background/80 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life. Schedule a consultation with our design team today.
          </p>
          <Button label="Book Consultation" href="/contact" variant="pill" icon />
        </div>
      </section>
    </>
  );
}