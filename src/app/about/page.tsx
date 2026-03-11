import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { images } from '@/config/images';
import { Marquee } from '@/components/sections/Marquee';

export const metadata = {
  title: 'About - Birch & Bloom',
  description: 'Learn more about our team and design philosophy.',
  openGraph: {
    title: 'About - Birch & Bloom',
    description: 'Learn more about our team and design philosophy.',
    images: [images.hero.src],
  },
};

export default function AboutPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col items-center">
        <img src={images.about.src} alt={images.about.alt} className="rounded-xl mb-4" />
        <p className="text-lg text-center max-w-2xl">
          We are Birch & Bloom, an award-winning interior design studio specializing in creating beautiful, functional spaces that tell your story.
        </p>
      </div>
      <Marquee />
    </SectionWrapper>
  );
}