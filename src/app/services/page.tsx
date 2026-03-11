import { ServiceList } from '@/components/sections/ServiceList';
import { InvestmentCards } from '@/components/sections/InvestmentCards';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { metadata } from '../layout';

export const metadata = {
  title: 'Services - Birch & Bloom',
  description: 'Discover our interior design services and pricing.',
  openGraph: {
    title: 'Services - Birch & Bloom',
    description: 'Discover our interior design services and pricing.',
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