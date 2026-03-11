'use client';

import { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import Link from "next/link";

export const metadata = {
  title: "Services | Birch & Bloom Interior Design",
  description: "From full-service renovations to virtual design, find the perfect package for your needs.",
};

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Full Home Design",
      price: "From $15,000",
      desc: "Complete design from concept to installation. We handle contractors, procurement, and every detail in between.",
      details: ["Conceptual Design", "Floor Plans & 3D Renderings", "Procurement & Installation", "Project Management"],
      img: "service-1"
    },
    {
      title: "Room Refresh",
      price: "From $3,500",
      desc: "Single room transformation perfect for when you need a change but not a full overhaul. Includes furniture sourcing and layout.",
      details: ["Moodboard Creation", "Furniture & Decor Sourcing", "Space Planning", " styling Session"],
      img: "service-2"
    },
    {
      title: "Design Consultation",
      price: "$350 / 2hrs",
      desc: "In-home walkthrough + design direction. Ideal for DIYers who need professional advice to get started.",
      details: ["Professional Assessment", "Design Direction", "Q&A Session", "Follow-up Summary"],
      img: "service-3"
    },
    {
      title: "Virtual Design",
      price: "From $1,500",
      desc: "Moodboard, floor plan, and shopping list delivered digitally. Perfect for clients outside of Nashville.",
      details: ["Digital Moodboard", "Shopping List with Links", "Floor Plan", "Video Call Consult"],
      img: "gallery-1"
    },
    {
      title: "Staging for Sale",
      price: "From $2,500",
      desc: "Maximize home value before listing. We use existing inventory and rentals to create buyer appeal.",
      details: ["Staging Plan", "Furniture Rental", "Accessory Styling", "De-cluttering Advice"],
      img: "gallery-2"
    },
    {
      title: "Holiday Styling",
      price: "From $800",
      desc: "Seasonal decor transformation. We bring the holiday spirit with our curated collection of decor.",
      details: ["Tree Styling", "Mantle Design", "Entryway Display", "Take-down Service"],
      img: "gallery-3"
    }
  ];

  return (
    <main className="pt-24">
      <div className="global-overlay" />
      
      {/* Split Hero */}
      <section className="min-h-[70vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center p-[clamp(24px,5vw,80px)] bg-[#d4c5b2]/20">
          <div className="max-w-xl">
            <h1 className="font-playfair text-[clamp(2.5rem,6vw,4.5rem)] text-[#2c2c2c] mb-6 leading-tight">
              Services & <br /> Investment
            </h1>
            <p className="font-manrope text-lg text-[#6b6b6b]">
              Transparent pricing for exceptional design. Choose the level of service that fits your lifestyle and budget.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
          <Image
            src={images.service2.src}
            alt="Interior textures"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
      </section>

      {/* Interactive List */}
      <section className="py-24 px-[clamp(24px,5vw,80px)] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* List Column */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                className={`
                  border-b cursor-pointer transition-colors duration-300 pb-6
                  ${activeService === index ? 'border-[#8b7355]' : 'border-[#d4c5b2] hover:border-[#8b7355]/50'}
                `}
              >
                <h3 className={`font-playfair text-3xl transition-colors ${activeService === index ? 'text-[#8b7355]' : 'text-[#2c2c2c]'}`}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Display Column */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-32 h-[500px] rounded-sm overflow-hidden mb-8">
               <Image
                  key={activeService} // Force re-render/animation
                  src={images[services[activeService].img as keyof typeof images].src}
                  alt={services[activeService].title}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="50vw"
                />
            </div>
            
            <div className="animate-fade-in-up">
              <p className="font-playfair text-[#8b7355] italic text-2xl mb-4">{services[activeService].price}</p>
              <p className="font-manrope text-[#2c2c2c] text-xl mb-8 leading-relaxed">
                {services[activeService].desc}
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {services[activeService].details.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#6b6b6b]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b7355]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button>Inquire About {services[activeService].title.split(' ').slice(0, 2).join(' ')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}