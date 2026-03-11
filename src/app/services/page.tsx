import { ServiceList } from "@/components/sections/ServiceList";
import { InvestmentCards } from "@/components/sections/InvestmentCards";
import { images } from "@/config/images";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "Services | Birch & Bloom Interior Design",
  description: "Discover our range of interior design services tailored to your needs.",
  openGraph: {
    title: "Services | Birch & Bloom Interior Design",
    description: "Discover our range of interior design services tailored to your needs.",
    images: [images.hero.src],
  },
};

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <ServiceList />
      <InvestmentCards />
    </SectionWrapper>
  );
}