import Image from "next/image";
import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Birch & Bloom Interior Design",
  description: "Meet the team behind Birch & Bloom. Award-winning designers based in Nashville, TN.",
};

export default function About() {
  return (
    <main className="pt-24">
      <div className="global-overlay" />
      
      {/* Portrait Hero */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 bg-[#f0ede8]">
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto md:mx-0 w-full">
            <Image
              src={images["team-1"].src}
              alt="Claire Whitfield"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg max-w-xs">
               <p className="font-cormorant italic text-2xl text-[#8b7355]">"Design is not just what it looks like. Design is how it works."</p>
            </div>
          </div>
          
          <div className="text-center md:text-left pt-12 md:pt-0 px-4">
            <p className="text-[#8b7355] uppercase tracking-widest text-sm font-bold mb-4">The Designer</p>
            <h1 className="font-playfair text-[clamp(2.5rem,6vw,5rem)] text-[#2c2c2c] mb-8">Claire Whitfield</h1>
            <div className="font-manrope text-[#6b6b6b] text-lg space-y-6 max-w-xl mx-auto md:mx-0">
              <p>
                With over 14 years of experience, Claire Whitfield leads Birch & Bloom with a passion for creating spaces that feel both curated and livable. An ASID certified professional, her work has been featured in Architectural Digest, Southern Living, and local Nashville publications.
              </p>
              <p>
                Claire specializes in warm, organic interiors that blend modern lines with antique finds. Her philosophy is simple: your home should tell your story, not just hers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="mb-16">
             <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] text-[#2c2c2c]">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="space-y-4">
                <h3 className="font-playfair text-2xl">Claire Whitfield</h3>
                <p className="text-[#8b7355] font-medium">Principal Designer</p>
                <p className="text-[#6b6b6b]">ASID certified, 14 years experience. Featured in Architectural Digest. Specializes in full-scale renovations and historic preservation.</p>
             </div>
             <div className="space-y-4">
                <h3 className="font-playfair text-2xl">Megan Park</h3>
                <p className="text-[#8b7355] font-medium">Senior Designer</p>
                <p className="text-[#6b6b6b]">Specializes in modern farmhouse and coastal design. 8 years experience. Expert in space planning and color theory.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 bg-[#2c2c2c] overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {['Architectural Digest', 'Southern Living', 'Nashville Lifestyles', 'House Beautiful', 'Veranda', 'Elle Decor'].map((mag, i) => (
              <span key={i} className="text-[#faf8f5]/40 text-4xl font-playfair uppercase">{mag}</span>
            ))}
            {['Architectural Digest', 'Southern Living', 'Nashville Lifestyles', 'House Beautiful', 'Veranda', 'Elle Decor'].map((mag, i) => (
              <span key={`dup-${i}`} className="text-[#faf8f5]/40 text-4xl font-playfair uppercase">{mag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Bento */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
          <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] text-[#2c2c2c] mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
             <div className="md:col-span-2 bg-[#d4c5b2]/30 p-8 flex flex-col justify-center">
               <h3 className="font-playfair text-3xl mb-4">Organic & Timeless</h3>
               <p className="font-manrope text-[#6b6b6b]">We prioritize natural materials and neutral palettes that stand the test of time, rather than chasing fleeting trends.</p>
             </div>
             <div className="bg-[#2c2c2c] text-[#faf8f5] p-8 flex flex-col justify-center">
               <h3 className="font-playfair text-3xl mb-4">Client Focused</h3>
               <p className="font-manrope text-[#faf8f5]/80">Your voice is the loudest in the room. We guide, you decide.</p>
             </div>
             <div className="md:col-span-1 bg-[#8b7355]/10 p-8 flex flex-col justify-center">
               <h3 className="font-playfair text-3xl mb-4">Detail Oriented</h3>
               <p className="font-manropo text-[#6b6b6b]">It's not just the big furniture. It's the trim, the hardware, the way the light hits the wall at 5pm.</p>
             </div>
             <div className="md:col-span-2 bg-white p-8 flex flex-col justify-center border border-[#d4c5b2]">
               <h3 className="font-playfair text-3xl mb-4">Function First</h3>
               <p className="font-manrope text-[#6b6b6b]">A beautiful room that you can't live in is a failure. We design for real life, messy kids, and pets included.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}