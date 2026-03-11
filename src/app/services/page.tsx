import { images } from '@/config/images';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import ServiceList from '@/components/sections/ServiceList';
import InvestmentCards from '@/components/sections/InvestmentCards';

export const metadata = {
  title: "Services | Birch & Bloom Interior Design",
  description: "Discover our range of interior design services tailored to your needs.",
  openGraph: {
    title: "Services | Birch & Bloom Interior Design",
    description: "Discover our range of interior design services tailored to your needs.",
    image: images.hero.src,
  },
};

export default function ServicesPage() {
  return (
    <main className={cn("pt-20")}>
      <section className="bg-white py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <ServiceList />
        <InvestmentCards />
      </section>
    </main>
  );
}