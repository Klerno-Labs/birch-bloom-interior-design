import { Metadata } from "next";
import { images } from "@/config/images";
import Marquee from "@/components/sections/Marquee";

export const metadata: Metadata = {
  title: "About | Birch & Bloom Interior Design",
  description: "Learn more about our team and design philosophy.",
  openGraph: {
    title: "About | Birch & Bloom Interior Design",
    description: "Learn more about our team and design philosophy.",
    images: [images.hero.src],
  },
};

export default function About() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mb-8">The Designer</h1>
      <img src={images.about.src} alt="Business professionals in modern meeting room" className="w-full h-auto mb-8" />
      <p className="text-center max-w-2xl mx-auto mb-12">
        Claire Whitfield, Principal Designer, ASID certified, has over 14 years of experience and has been featured in Architectural Digest.
      </p>
      <Marquee />
    </main>
  );
}