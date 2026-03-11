import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { images } from "@/config/images";

export const metadata = {
  title: "Our Process | Birch & Bloom Interior Design",
  description: "How we work. From the initial consultation to the final installation.",
};

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We start with a consultation to understand your lifestyle, budget, and vision. We walk through your space, take measurements, and discuss what's working and what isn't.",
    img: "about",
    align: "left"
  },
  {
    id: "02",
    title: "Concept",
    desc: "We develop a design direction, including moodboards, material selections, and preliminary floor plans. This is where the big picture comes into focus.",
    img: "gallery-1",
    align: "right"
  },
  {
    id: "03",
    title: "Design",
    desc: "We dive into the details. Finalizing floor plans, selecting furniture, fabrics, finishes, and lighting. We present comprehensive proposals for your approval.",
    img: "gallery-2",
    align: "left"
  },
  {
    id: "04",
    title: "Execution",
    desc: "We manage the procurement and installation. We coordinate with contractors and vendors to ensure every element is delivered and installed perfectly.",
    img: "cta",
    align: "right"
  }
];

export default function Process() {
  return (
    <main className="pt-24">
      <div className="global-overlay" />
      
      <section className="py-24 text-center px-4">
        <h1 className="font-playfair text-[clamp(2.5rem,6vw,5rem)] text-[#2c2c2c] mb-6">How We Work</h1>
        <p className="font-manrope text-[#6b6b6b] max-w-2xl mx-auto">
          A collaborative, transparent process designed to minimize stress and maximize joy.
        </p>
      </section>

      <section className="py-24 max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#8b7355] -translate-x-0 md:-translate-x-1/2 hidden md:block" />

          {steps.map((step, index) => (
            <div key={step.id} className={`relative flex flex-col md:flex-row items-center mb-24 gap-12 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Node */}
              <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#8b7355] border-4 border-[#faf8f5] z-10" />

              {/* Image Column */}
              <div className="w-full md:w-5/12 relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={images[step.img as keyof typeof images].src}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>

              {/* Content Column */}
              <div className={`w-full md:w-5/12 ${step.align === 'left' ? 'md:text-left' : 'md:text-right'}`}>
                <span className="font-playfair text-5xl text-[#d4c5b2] block mb-4">{step.id}</span>
                <h3 className="font-playfair text-3xl text-[#2c2c2c] mb-4">{step.title}</h3>
                <p className="font-manrope text-[#6b6b6b] leading-relaxed">
                  {step.desc}
                </p>
                {step.id === "04" && (
                  <div className="mt-8">
                    <ul className={`space-y-2 text-[#6b6b6b] ${step.align === 'right' ? 'md:ml-auto' : ''}`}>
                      <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#8b7355]" /> White Glove Delivery</li>
                      <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#8b7355]" /> Professional Installation</li>
                      <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#8b7355]" /> Final Styling & Reveal</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}