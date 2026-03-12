"use client";

import Image from "next/image";
import { images } from "@/config/images";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images["hero"].src}
          alt={images["hero"].alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          <span className="font-italic text-secondary text-xl md:text-2xl block mb-4">
            Spaces That Tell Your Story
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.9]">
            Curating sanctuaries for modern living.
          </h1>
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <Button label="View Portfolio" href="/portfolio" icon />
            <Button label="Book Consultation" href="/contact" variant="outline" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={scrollToContent}>
        <ArrowDown className="w-6 h-6 text-primary opacity-70" />
      </div>
    </section>
  );
};

export default Hero;