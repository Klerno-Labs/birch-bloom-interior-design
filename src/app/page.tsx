import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { ContactForm } from "@/components/sections/ContactForm"; // Reusing for demo purposes, usually strictly on /contact

export const metadata = {
  title: "Home | Birch & Bloom Interior Design",
  description: "Award-winning interior design studio specializing in residential transformations. From single-room refreshes to full-home renovations.",
};

export default function Home() {
  return (
    <>
      <div className="global-overlay" />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 via-[#2c2c2c]/20 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] pb-24 text-[#faf8f5]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-cormorant italic text-[#d4c5b2] text-xl mb-4">Nashville's Premier Design Studio</p>
            <h1 className="font-playfair text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] mb-8 max-w-4xl">
              Spaces That Tell <br /> Your Story
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button variant="secondary" className="text-white border-white hover:text-[#d4c5b2] hover:border-[#d4c5b2] px-8 py-4 text-lg">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-[#8b7355] hover:bg-white hover:text-[#2c2c2c] px-8 py-4 text-lg rounded-none">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-[7.5rem] max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="max-w-3xl">
          <h2 className="font-playfair text-[clamp(2rem,5vw,3.5rem)] text-[#2c2c2c] mb-8 leading-tight">
            Curating sanctuaries that feel like home, designed for how you actually live.
          </h2>
          <p className="font-manrope text-[1.125rem] text-[#6b6b6b] leading-relaxed mb-8">
            We believe your home should be a reflection of your journey. At Birch & Bloom, we blend timeless elegance with modern functionality to create spaces that are not just beautiful, but deeply personal. Whether it's a single room refresh or a full-scale renovation, we handle the details so you can enjoy the transformation.
          </p>
          <div className="w-16 h-px bg-[#8b7355]" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-[7.5rem] bg-white">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-[#8b7355] uppercase tracking-widest text-sm font-bold mb-2">Our Expertise</p>
              <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] text-[#2c2c2c]">Design Services</h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-[#2c2c2c] hover:text-[#8b7355] transition-colors font-manrope font-medium">
              View all services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Full Home Design", price: "From $15,000", desc: "Complete design from concept to installation.", img: "service-1" },
              { title: "Room Refresh", price: "From $3,500", desc: "Single room transformation with new furnishings.", img: "service-2" },
              { title: "Virtual Design", price: "From $1,500", desc: "Moodboard, floor plan, and shopping list online.", img: "service-3" }
            ].map((service, idx) => (
              <Link key={idx} href="/services" className="group block">
                <div className="relative overflow-hidden rounded-sm mb-6 aspect-[4/3]">
                  <Image
                    src={images[service.img as keyof typeof images].src}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-playfair text-2xl text-[#2c2c2c] mb-2 group-hover:text-[#8b7355] transition-colors">{service.title}</h3>
                <p className="font-manrope text-[#8b7355] font-medium mb-2">{service.price}</p>
                <p className="font-manrope text-[#6b6b6b] text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work (Horizontal Scroll) */}
      <section className="py-[7.5rem] bg-[#faf8f5] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] mb-12">
          <p className="text-[#8b7355] uppercase tracking-widest text-sm font-bold mb-2">Portfolio</p>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] text-[#2c2c2c]">Selected Projects</h2>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 px-[clamp(24px,5vw,80px)] snap-x snap-mandatory scrollbar-hide">
          {[
            { title: "The Highlands Ranch", loc: "Nashville, TN", img: "gallery-1", aspect: "aspect-[3/4]" },
            { title: "Belle Meade Modern", loc: "Nashville, TN", img: "gallery-2", aspect: "aspect-[4/3]" },
            { title: "East Nashville Bungalow", loc: "Nashville, TN", img: "gallery-3", aspect: "aspect-[4/3]" },
            { title: "Green Hills Estate", loc: "Nashville, TN", img: "service-1", aspect: "aspect-[3/4]" },
          ].map((project, idx) => (
            <div key={idx} className={`relative shrink-0 w-[85vw] md:w-[600px] snap-center ${project.aspect} group overflow-hidden rounded-sm`}>
              <Image
                src={images[project.img as keyof typeof images].src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, 600px"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-white font-playfair text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <p className="text-[#faf8f5]/80 font-manrope translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Parallax */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <Image
            src={images["testimonial-bg"].src}
            alt="Background"
            fill
            className="object-cover fixed"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#faf8f5]/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 text-[#8b7355]">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <blockquote className="font-playfair text-[clamp(1.5rem,3vw,2.5rem)] text-[#2c2c2c] leading-tight mb-8">
            "Claire completely transformed our 1960s ranch into a modern sanctuary. We're still in awe. The attention to detail is extraordinary."
          </blockquote>
          <cite className="not-italic font-manrope font-bold text-[#2c2c2c] uppercase tracking-widest">
            — The Hendersons
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 bg-[#2c2c2c] text-[#faf8f5]">
        <div className="absolute inset-0">
          <Image
            src={images.cta.src}
            alt="CTA Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-[clamp(2rem,5vw,4rem)] mb-6">Ready to transform your home?</h2>
          <p className="font-manrope text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Book a consultation and let's discuss how we can bring your vision to life.
          </p>
          <Link href="/contact">
            <Button variant="pill" className="bg-[#faf8f5] text-[#2c2c2c] hover:bg-[#8b7355] hover:text-white px-10 py-4 text-lg">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}