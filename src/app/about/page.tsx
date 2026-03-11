import { images } from '@/config/images';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Marquee from '@/components/sections/Marquee';

export const metadata = {
  title: "About | Birch & Bloom Interior Design",
  description: "Learn more about Birch & Bloom and our design philosophy.",
  openGraph: {
    title: "About | Birch & Bloom Interior Design",
    description: "Learn more about Birch & Bloom and our design philosophy.",
    image: images.hero.src,
  },
};

export default function AboutPage() {
  return (
    <main className={cn("pt-20")}>
      <section className="bg-white py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">
            At Birch & Bloom, we believe in creating spaces that tell your story. Our award-winning team specializes in residential transformations, ensuring every detail reflects your unique style.
          </p>
          <img src={images.about.src} alt="Business professionals in modern meeting room" className="rounded-xl mb-8" />
        </div>
        <Marquee />
      </section>
    </main>
  );
}