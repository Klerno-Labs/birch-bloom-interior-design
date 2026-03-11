import { images } from "@/config/images";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "About | Birch & Bloom Interior Design",
  description: "Learn more about our design philosophy and the team behind Birch & Bloom.",
  openGraph: {
    title: "About | Birch & Bloom Interior Design",
    description: "Learn more about our design philosophy and the team behind Birch & Bloom.",
    images: [images.hero.src],
  },
};

export default function AboutPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <img src={images.about.src} alt={images.about.alt} className="rounded-xl mb-6" />
      <p className="text-lg text-center">
        At Birch & Bloom, we believe in creating spaces that tell your story. Our team of experienced designers is dedicated to transforming your home into a sanctuary that reflects your personal style.
      </p>
    </SectionWrapper>
  );
}