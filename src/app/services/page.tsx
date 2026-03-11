import { Metadata } from "next";
import InteractiveServiceList from "@/components/sections/ServiceList";
import InvestmentCards from "@/components/sections/InvestmentCards";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Services | Birch & Bloom Interior Design",
  description: "Discover our range of interior design services and pricing.",
  openGraph: {
    title: "Services | Birch & Bloom Interior Design",
    description: "Discover our range of interior design services and pricing.",
    images: [images.hero.src],
  },
};

export default function Services() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mb-8">Services & Expertise</h1>
      <InteractiveServiceList />
      <InvestmentCards />
    </main>
  );
}