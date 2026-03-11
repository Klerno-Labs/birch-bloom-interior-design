import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Timeline } from '@/components/sections/Timeline';

export const metadata = {
  title: 'Process - Birch & Bloom',
  description: 'Discover our design process from consultation to completion.',
  openGraph: {
    title: 'Process - Birch & Bloom',
    description: 'Discover our design process from consultation to completion.',
  },
};

export default function ProcessPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold text-center mb-8">Our Process</h1>
      <Timeline />
    </SectionWrapper>
  );
}