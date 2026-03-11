import Image from "next/image";
import { images } from "@/config/images";
import Marquee from "@/components/sections/Marquee";

export default function About() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Variant: Portrait */}
      <section className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[600px] lg:h-[800px]">
             <Image
               src={images["about"].src}
               alt={images["about"].alt}
               fill
               className="object-cover"
               priority
             />
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <span className="font-italic text-secondary text-lg mb-4 block">The Studio</span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8 leading-[1.1]">
              Creating spaces that tell your story.
            </h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Birch & Bloom was founded on a simple premise: your home should be the most honest reflection of who you are. We move beyond trends to find the enduring elements of style that resonate with your lifestyle.
              </p>
              <p>
                Our approach is collaborative and deeply personal. We listen. We ask the hard questions. We immerse ourselves in your world. This allows us to design spaces that aren&apos;t just beautiful to look at, but joyous to live in.
              </p>
              <p>
                Based in Nashville, our work has been featured in Architectural Digest, Southern Living, and Veranda, celebrating our commitment to organic textures, warm palettes, and functional design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Philosophy Bento Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)]">
          <h2 className="font-serif text-4xl text-primary mb-12 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
            <div className="bg-background p-8 rounded-lg md:col-span-2 flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-primary mb-4">Organic Modernism</h3>
              <p className="text-muted-foreground">
                We blend the clean lines of modern design with the warmth of natural materials. Wood, stone, linen—these elements ground our spaces in reality and comfort.
              </p>
            </div>
            <div className="bg-accent/30 p-8 rounded-lg flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-primary mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize vintage finds, locally sourced goods, and sustainable materials to reduce environmental impact without sacrificing luxury.
              </p>
            </div>
            <div className="bg-primary text-background p-8 rounded-lg flex flex-col justify-center">
              <h3 className="font-serif text-2xl mb-4">Function First</h3>
              <p className="text-background/80">
                Beauty is nothing without utility. We design for how you actually live, ensuring that every space serves a purpose.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg md:col-span-2 flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-primary mb-4">The Edit</h3>
              <p className="text-muted-foreground">
                Less is often more. We carefully curate objects and art, breathing room into spaces so that the architecture and the people inside can shine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}